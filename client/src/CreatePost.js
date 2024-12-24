import React, { useState, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Nav from './components/Nav';
import Modal from './components/Modal';

function CreatePost() {
    
    const [content, setContent] = useState({
        city: '',
        country: '',
        firstParagraph: '',
        secondParagraph: ''
    });
    const [files, setFiles] = useState([]);
    const [fileNames, setFilenames] = useState([]);
    const [fileErrors, setFileErrors] = useState({});
   
    const modalRef = useRef();
    const [modalState, setModalState] = useState({});
   
    const { authenticated, userInfo } = useSelector((state) => state.authenticator);
    if (!authenticated || userInfo.type !== 'admin') {
        return (
            <Navigate to='/forbidden' replace />
        )
    }
  
    function handleFileChange(e) {
        let file = e.target.files[0];
        if (!file) {
            return;
        }
        let id = e.target.id;
        setFileErrors((prevErrors) => ({
            ...prevErrors,
            [id]: false
        }));
        if (file && file.size > 5242880) {
            let fileInput = document.getElementById(id);
            fileInput.value = null;
            setFileErrors((prevErrors) => ({
                ...prevErrors,
                [id]: true
            }));
            return;
        }        
        const modifiedFile = new File([file], `${id}`, {
            type: file.type,
            lastModified: file.lastModified,
        });
        setFiles((prevFiles) => {
            let deduplicatedFiles = prevFiles.filter(file => file.name !== id);
            return [...deduplicatedFiles, modifiedFile];
        });
        setFilenames((prevFilenames) => {
            let deduplicatedFilenames = prevFilenames.filter(fileName => fileName.fileId !== id);
            return [...deduplicatedFilenames, {
                fileId: id,
                fileName: file.name
            }]
        })
    }
    
    function handlePost(e) {
        e.preventDefault();
        if (!files) {
            alert('Please upload a file.')
        }
        const formData = new FormData();
        formData.append('content', JSON.stringify(content))
        files.forEach((file) => {
            formData.append('files[]', file)
        })
        fetch('/api/posts', {
            method: 'POST',
            mode: 'cors',
            body: formData
        })
            .then(response => response.json())
            .then((response) => {
                console.log(response)
                if (response.status === 'success') {
                    setModalState({
                        state: 'Success!',
                        message: 'Your new post will be visible on the Posts page.'
                    })
                    setContent({
                        city: '',
                        country: '',
                        firstParagraph: '',
                        secondParagraph: ''
                    });
                    setFilenames([]);
                    let fileInputs = document.querySelectorAll('input[type="file"]')
                    fileInputs.forEach((fileInput) => {
                        fileInput.value = null;
                    })
                    modalRef.current.showModal();
                } else {
                    setModalState({
                        state: 'Error',
                        message: 'There was a problem creating your post.'
                    })
                    modalRef.current.showModal();
                }
            })
    }
    
    return (
        <>
            <Nav></Nav>
            <div className='flex column centered'>
                <div className='form-container'>
                    <h1 className='form-title'>Create a post</h1>
                    <form className='form-create' encType='multipart/form-data' onSubmit={handlePost}>
                        <div className='flex column form-input-group'>
                            <label className='body-font-small form-input-label'>City</label>
                            <input 
                                id='city'
                                type='text'
                                value={content.city}
                                autoComplete='off'
                                required
                                className='form-input body-font-small' 
                                onChange={e => setContent(prevState => ({
                                    ...prevState,
                                    city: e.target.value
                                }))}
                            />                         
                        </div>                
                        <div className='flex column form-input-group'>
                            <label className='body-font-small form-input-label'>Country</label>
                            <input 
                                id='country'
                                type='text'
                                value={content.country}
                                autoComplete='off'
                                required
                                className='form-input body-font-small' 
                                onChange={e => setContent(prevState => ({
                                    ...prevState,
                                    country: e.target.value
                                }))}
                            />                         
                        </div>
                        <div className='flex column form-input-group'>
                            <label className='body-font-small form-input-label'>First Paragraph</label>
                            <textarea 
                                id='first-paragraph'
                                value={content.firstParagraph}
                                autoComplete='off'
                                required
                                className='form-input form-textarea body-font-small'
                                onChange={e => setContent(prevState => ({
                                    ...prevState,
                                    firstParagraph: e.target.value
                                }))}
                            />
                        </div>
                        <div className='flex column form-input-group'>
                            <label className='body-font-small form-input-label'>First Image</label>
                            <label htmlFor='first-image' className='flex row form-file-input'>
                                <span className='button-3d-outline form-file-button'>Browse</span>
                                <span className='form-file-name'>
                                    { !fileNames.find(file => file.fileId === 'first-image') ? 
                                        'Choose a file' : 
                                        fileNames.find(file => file.fileId === 'first-image').fileName
                                    }
                                </span> 
                            </label>
                            <input 
                                id='first-image' 
                                type='file' 
                                name='files[]' 
                                accept='image/png, image/jpeg'
                                onChange={handleFileChange} 
                            />
                            { fileErrors['first-image'] ? <p className='form-file-error'>File exceeds 5MB size limit.</p> : null }
                        </div>
                        <div className='flex column form-input-group'>
                            <label className='body-font-small form-input-label'>Second Paragraph</label>
                            <textarea 
                                id='second-paragraph'
                                value={content.secondParagraph}
                                autoComplete='off'
                                required
                                className='form-input form-textarea body-font-small'
                                onChange={e => setContent(prevState => ({
                                    ...prevState,
                                    secondParagraph: e.target.value
                                }))}
                            />                        
                        </div>
                        <div className='flex column form-input-group'>
                            <label className='body-font-small form-input-label'>Second Image</label>
                            <label htmlFor='second-image' className='flex row form-file-input'>
                                <span className='button-3d-outline form-file-button'>Browse</span>
                                <span className='form-file-name'>
                                    { !fileNames.find(file => file.fileId === 'second-image') ? 
                                        'Choose a file' : 
                                        fileNames.find(file => file.fileId === 'second-image').fileName
                                    }
                                </span>       
                            </label>                          
                            <input 
                                id='second-image' 
                                type='file' 
                                name='files[]' 
                                accept='image/png, image/jpeg'
                                onChange={handleFileChange} 
                            />   
                            { fileErrors['second-image'] ? <p className='form-file-error'>File exceeds 5MB size limit.</p> : null }                     
                        </div>
                        <div><button type='submit' className='form-button button-3d'>Submit</button></div>
                    </form>
                </div>
            </div>
            <Modal ref={modalRef} modalInfo={modalState}></Modal>
        </>
    )
}

export default CreatePost