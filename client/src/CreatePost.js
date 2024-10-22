import React, { useState, useRef } from 'react';
import Header from './Components/Header';
import Modal from './Components/Modal';

function CreatePost() {

    const [post, setPost] = useState({
        city: '',
        country: '',
        firstParagraph: '',
        secondParagraph: '',
        firstImageUrl: '',
        secondImageUrl: ''
    });

    const modalRef = useRef();

    const [modalState, setModalState] = useState({});

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
                    setModalState({
                        state: 'Success',
                        message: 'Your new post will be visible on the Posts page.'
                    })
                    setPost({
                        city: '',
                        country: '',
                        firstParagraph: '',
                        secondParagraph: '',
                        firstImageUrl: '',
                        secondImageUrl: '',
                    });
                    modalRef.current.showModal();
                } else {
                    setModalState('Error')
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
                            <label className='body-font-small form-input-label'>City</label>
                            <input 
                                id='post-city'
                                type='text'
                                value={post.city}
                                required
                                className='form-input body-font-small' 
                                onChange={e => setPost(prevState => ({
                                    ...prevState,
                                    city: e.target.value
                                }))}
                            />                         
                        </div>
                        <div className='flex column form-input-group'>
                            <label className='body-font-small form-input-label'>Country</label>
                            <input 
                                id='post-country'
                                type='text'
                                value={post.country}
                                required
                                className='form-input body-font-small' 
                                onChange={e => setPost(prevState => ({
                                    ...prevState,
                                    country: e.target.value
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
                        <button type='submit' className='form-button button-3d'>Submit</button>
                    </form>
                </div>
            </div>
            <Modal ref={modalRef} modalInfo={modalState}></Modal>
        </>
    )
}

export default CreatePost