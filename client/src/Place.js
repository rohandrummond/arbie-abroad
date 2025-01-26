import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Nav from './components/Nav'
import CommentBox from './components/CommentBox';
import Loader from './components/Loader';

function Place() {

    const [loadedImages, setLoadedImages] = useState(0);
    const [loading, setLoading] = useState(true);

    const location = useLocation();
    const { post } = location.state;
    
    if (!post) {
        return <Navigate to="/posts" replace />;
    }

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
            <Nav></Nav>
            <div className='flex column centered'>
                <h1 className='medium-hd place-hd'>{`${post.city}, ${post.country}`}</h1>
                <div className='place-ctr'>
                    <div className='flex row place-sctn'>
                        <div className='flex centered place-txt-ctr'>
                            <p className='body-txt'>{post.firstParagraph}</p>
                        </div>
                        <div className='flex centered place-img-ctr'>
                            <img
                                src={`/api/images/${post.images[0]}`} 
                                alt={post.city}
                                className='place-img'
                                onLoad={handleImageLoad}
                            />
                        </div>
                    </div>
                    <div className='flex row place-sctn'>
                        <div className='flex centered place-img-ctr'>
                            <img 
                                src={`/api/images/${post.images[1]}`}
                                alt={post.city}
                                className='place-img'
                                onLoad={handleImageLoad}
                            />
                        </div>
                        <div className='flex centered place-txt-ctr'>
                            <p className='body-txt'>{post.secondParagraph}</p>
                        </div>
                    </div>
                    <CommentBox postId={post._id} />
                </div>
            </div>
        </>
    )
}

export default Place