import React, { useEffect, useState, useRef } from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header'
import Modal from './components/Modal';

function ManagePosts() {
    
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function getAllPosts() {
            try {
                const response = await fetch('/api/posts');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }
        getAllPosts();
    }, []);

    const modalRef = useRef();
    const [modalState, setModalState] = useState({});

    const { authenticated, userInfo } = useSelector((state) => state.authenticator);
    if (!authenticated || userInfo.type !== 'admin') {
        return (
            <Navigate to='/forbidden' replace />
        )
    }
    
    async function handlePostDelete(e) {
        const postId = {
            id: e.target.id
        };
        console.log(posts)
        fetch(`/api/posts`, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postId)
        })
            .then(response => response.json())
            .then((response) => {
                if (response.status === 'success') {
                    setModalState({
                        state: 'Success!',
                        message: 'Post has been deleted.'
                    })
                    modalRef.current.showModal();
                    setPosts(prevPosts => prevPosts.filter(post => post._id !== postId.id));
                } else {
                    setModalState({
                        state: 'Error',
                        message: 'There was a problem deleting that post.'
                    })
                    modalRef.current.showModal();     
                }
            })
    }
    
    return (
        <>
            <Header></Header>
            <div className='flex centered full-height'>
                <div className='flex column centered table-inner'>
                    <div className='flex row centered table-title-container'>
                        <h1 className='table-title'>Manage posts</h1>
                        <button className="button-3d"><a href='/create-post'>Create</a></button>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Country</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                posts.map((item) =>
                                    <tr key={item._id}>
                                        <td>{item.city}</td>
                                        <td>{item.country}</td>
                                        <td>
                                            <img 
                                                src='edit.svg' 
                                                className='table-action-icon shrink'
                                            />
                                            <img 
                                                src='delete.svg' 
                                                className='table-action-icon shrink' 
                                                id={item._id}
                                                onClick={handlePostDelete}
                                            />
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal ref={modalRef} modalInfo={modalState}></Modal>
        </>
    )
}

export default ManagePosts
