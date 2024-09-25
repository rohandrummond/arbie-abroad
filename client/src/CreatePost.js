import React, { useState } from 'react';
import Header from './Components/Header';

function CreatePost() {

    const [post, setPost] = useState({
        title: '',
        firstParagraph: '',
        secondParagraph: '',
        firstImageUrl: '',
        secondImageUrl: ''
    });

    const [databaseError, setDatabaseError] = useState({
        result: ''
    })


    function handlePost(e) {
        e.preventDefault();
        fetch(`/api/createPost`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(response => response.json())
            .then((response) => {
                if (response.acknowledged === true) {
                    setDatabaseError({
                        result: 'success'
                    })
                    setPost({
                        title: '',
                        firstParagraph: '',
                        secondParagraph: '',
                        firstImageUrl: '',
                        secondImageUrl: ''
                    });
                } else {
                    setDatabaseError({
                        result: 'error'
                    })
                }
            })
    }

    return (
        <>
            <Header></Header>
            <div className='flex column centered'>
                <h1 className='create-heading'>Create Post</h1>
                <div className='form-container'>
                    <form className='form-create' onSubmit={handlePost}>
                    <div className='flex column form-input-group'>
                            <label className='body-font-small form-input-label'>Title</label>
                            <input 
                                id='post-title'
                                type='text'
                                value={post.title}
                                required
                                className='form-input body-font-small' 
                                onChange={e => setPost(prevState => ({
                                    ...prevState,
                                    title: e.target.value
                                }))}
                            />                         
                        </div>
                        <div className='flex column form-input-group'>
                            <label className='body-font-small form-input-label'>First Paragraph</label>
                            <textarea 
                                id='first-paragraph'
                                value={post.firstParagraph}
                                required
                                className='form-input form-textarea body-font-small'
                                onChange={e => setPost(prevState => ({
                                    ...prevState,
                                    firstParagraph: e.target.value
                                }))}
                            />
                        </div>
                        <div className='flex column form-input-group'>
                            <label className='body-font-small form-input-label'>First Image URL</label>
                            <input 
                                id='first-image-url'
                                type='url'
                                value={post.firstImageUrl}
                                required
                                className='form-input body-font-small' 
                                onChange={e => setPost(prevState => ({
                                    ...prevState,
                                    firstImageUrl: e.target.value
                                }))}
                            />                        
                        </div>
                        <div className='flex column form-input-group'>
                            <label className='body-font-small form-input-label'>Second Paragraph</label>
                            <textarea 
                                id='second-paragraph'
                                value={post.secondParagraph}
                                required
                                className='form-input form-textarea body-font-small'
                                onChange={e => setPost(prevState => ({
                                    ...prevState,
                                    secondParagraph: e.target.value
                                }))}
                            />                        
                        </div>
                        <div className='flex column form-input-group'>
                            <label className='body-font-small form-input-label'>Second Image URL</label>
                            <input 
                                id='second-image-url'
                                type='url'
                                value={post.secondImageUrl}
                                required
                                className='form-input body-font-small' 
                                onChange={e => setPost(prevState => ({
                                    ...prevState,
                                    secondImageUrl: e.target.value
                                }))}
                            />                         
                        </div>
                        <button type='submit' className='form-button'>Submit</button>
                        {
                            databaseError.result === 'error' ?
                            <p className='form-error-message'>There was an error creating your post. Please try again.</p>
                            : null
                        }
                        {
                            databaseError.result === 'success' ?
                            <p className='form-success-message'>Post creation successful. Visit the <a className='linked-text' href='/countries'>Countries</a> page to see your post.</p>
                            : null
                        }
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreatePost