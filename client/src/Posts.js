import React, {useState, useEffect} from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'

function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getAllPosts() {
            try {
                const response = await fetch('/api/posts');
                const data = await response.json();
                setPosts(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }
        getAllPosts();
    }, []);

    return (
        <>
            <Header></Header>
            <div className='posts-container'>
                {/* {posts.map((post,index) => (
                    <h1>{post.title}</h1>
                ))}; */}
                <div className='flex column post-card'>
                    <img 
                        className='post-card-image' 
                        src='https://images.unsplash.com/photo-1598249892865-56a0f2c00677?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    />
                    <h2 className='post-card-heading'>Hanoi</h2>
                </div>
                <div className='flex column post-card'></div>
                <div className='flex column post-card'></div>
                <div className='flex column post-card'></div>
            </div>
        </>
    )
}

export default Posts