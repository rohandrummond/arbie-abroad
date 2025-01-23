import React, { useEffect, useState, useRef } from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Nav from './components/Nav'
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
        <div className='flex column full-vp'>
            <Nav></Nav>
            <div className='flex row centered manage-post-ctr'>
                <div className='flex column centered'>
                    <div className='flex row centered table-hd-ctr'>
                        <h1 className='small-hd'>Manage posts</h1>
                        <button className='btn'><a href='/create-post'>Create</a></button>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th className='body-txt'>Title</th>
                                <th className='body-txt'>Country</th>
                                <th className='body-txt'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                posts.map((item) =>
                                    <tr key={item._id}>
                                        <td className='body-txt'>{item.city}</td>
                                        <td className='body-txt'>{item.country}</td>
                                        <td>
                                            <img 
                                                src='edit.svg' 
                                                className='table-edt-icon'
                                            />
                                            <img 
                                                src='delete.svg' 
                                                className='table-dlt-icon' 
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
        </div>
    )
}

export default ManagePosts
