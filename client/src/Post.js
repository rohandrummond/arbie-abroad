import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header'
import CommentBox from './components/CommentBox';

function Post() {

    const location = useLocation();
    const { post } = location.state;

    return (
        <>
            <Header></Header>
            <div className='flex column centered'>
                <div className='post-container'>
                    <h1 className='post-heading'>{`${post.city.toLowerCase()}, ${post.country.toLowerCase()}`}</h1>
                    <div className='flex row post-section'>
                        <div className='flex centered post-text-container'>
                            <p className='post-text'>{post.firstParagraph}</p>
                        </div>
                        <div className='flex centered post-image-container'>
                            <img src={`/api/images/${post.images[0]}`} className='post-image'></img>
                        </div>
                    </div>
                    <div className='flex row post-section'>
                        <div className='flex centered post-image-container'>
                            <img src={`/api/images/${post.images[1]}`} className='post-image'></img>
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