import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header'
import CommentBox from './components/CommentBox';
import Loader from './components/Loader';

function Post() {

    const location = useLocation();
    const { post } = location.state;
    const [loadedImages, setLoadedImages] = useState(0);
    const [loading, setLoading] = useState(true);
    
    const handleImageLoad = () => {
        setLoadedImages(prev => {
            const newCount = prev + 1;
            if (newCount === 2) {
                setLoading(false);
            }
            return newCount;
        });
    };

    return (
        <>
            {loading && <Loader />}
            <Header></Header>
            <div className='flex column centered'>
                <div className='post-container'>
                    <h1 className='post-heading'>{`${post.city.toLowerCase()}, ${post.country.toLowerCase()}`}</h1>
                    <div className='flex row post-section'>
                        <div className='flex centered post-text-container'>
                            <p className='post-text'>{post.firstParagraph}</p>
                        </div>
                        <div className='flex centered post-image-container'>
                            <img
                                src={`/api/images/${post.images[0]}`} 
                                className='post-image'
                                onLoad={handleImageLoad}
                            />
                        </div>
                    </div>
                    <div className='flex row post-section'>
                        <div className='flex centered post-image-container'>
                            <img 
                                src={`/api/images/${post.images[1]}`} 
                                className='post-image'
                                onLoad={handleImageLoad}
                            />
                        </div>
                        <div className='flex centered post-text-container'>
                            <p className='post-text'>{post.secondParagraph}</p>
                        </div>
                    </div>
                    <CommentBox postId={post._id} />
                </div>
            </div>
        </>
    )
}

export default Post