import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Header from './components/Header'
import PostCard from './components/PostsCard'
import Loader from './components/Loader';

function Posts() {

    const [posts, setPosts] = useState([]);
    const [loadedImages, setLoadedImages] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getAllPosts() {
            try {
                const response = await fetch('/api/posts');
                const data = await response.json();
                setPosts(data)
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }
        getAllPosts();
    }, []);

    const handleImageLoad = () => {
        setLoadedImages(prev => {
            const newCount = prev + 1;
            if (newCount === posts.length) {
                setLoading(false);
            }
            return newCount;
        });
    };

    return (
        <>
            {loading && <Loader />}
            <Header></Header>
            <div className='posts-container'>
                {posts.map((post) => (
                    <Link to={`/posts/${post.city.toLowerCase()}`} state={{ post }} key={post._id}>
                        <PostCard
                            city={post.city}
                            image={`/api/images/${post.images[0]}`}
                            onImageLoad={handleImageLoad}
                        />
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Posts