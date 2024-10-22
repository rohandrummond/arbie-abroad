import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Header from './Components/Header'
import Footer from './Components/Footer'
import PostCard from './Components/PostsCard'

function Posts() {

    window.addEventListener('load', () => {
        console.log("Loaded.")
    })

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
                {posts.map((post, index) => (
                    <Link to={`/posts/${post.city.toLowerCase()}`} state={{ post }} key={post._id}>
                        <PostCard
                            city={post.city}
                            image={post.firstImageUrl}
                        />
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Posts