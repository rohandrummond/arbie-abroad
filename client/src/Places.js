import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Nav from './components/Nav'
import PlacesCard from './components/PlacesCard'
import Loader from './components/Loader';

function Places() {

    const [posts, setPosts] = useState([]);
    const [loadedImages, setLoadedImages] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getAllPosts() {
            try {
                const response = await fetch('/api/posts');
                const data = await response.json();
                if (data.length === 0) {
                    setLoading(false);
                }
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
            <div className='flex column full-vp'>
                <Nav></Nav>
                <div className={ posts.length != 0 ? 'flex column ctr centered' : 'flex column ctr centered no-places-ctr' }>
                    <h1 className='medium-hd places-hd'>Our recent trips</h1>
                    {
                        posts.length === 0 ?
                        <p className='sub-txt no-places-msg'>Looks like arbie are slacking on creating content for this website. Check back again soon!</p> :
                        <div className='places-ctr'>
                            {posts.map((post) => (
                                <Link to={`/posts/${post.city.replaceAll(' ', '-').toLowerCase()}`} state={{ post }} key={post._id}>
                                    <PlacesCard
                                        city={post.city}
                                        image={`/api/images/${post.firstImage}`}
                                        onImageLoad={handleImageLoad}
                                    />
                                </Link>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Places