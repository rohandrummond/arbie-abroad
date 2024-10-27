import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Header from './Components/Header'
import Footer from './Components/Footer'
import PostCard from './Components/PostsCard'

function Posts() {

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

    return (
        <>
            <Header></Header>
            <div className='posts-container'>
                {posts.map((post) => (
                    <Link to={`/posts/${post.city.toLowerCase()}`} state={{ post }} key={post._id}>
                        <PostCard
                            city={post.city}
                            image={`/api/images/${post.images[0]}`}
                        />
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Posts