import React, { useEffect, useState } from "react";
import Header from './Components/Header'

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
    async function handlePostDelete(e) {
        const postId = {
            id: e.target.id
        };
        fetch(`/api/deletePost`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postId)
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
        </>
    )
}

export default ManagePosts
