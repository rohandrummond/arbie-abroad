import React, { useState, useRef } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Nav from './components/Nav';
import Modal from './components/Modal';

function CreatePost() {

    const { authenticated, userInfo } = useSelector((state) => state.authenticator);

    const navigate = useNavigate();
    
    const [content, setContent] = useState({
        city: '',
        country: '',
        firstParagraph: '',
        secondParagraph: ''
    });

    const [files, setFiles] = useState([]);
    const [fileTracker, setFileTracker] = useState([]);
    const [fileErrors, setFileErrors] = useState({});
   
    const modalRef = useRef();
    const [modalState, setModalState] = useState({});
    
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
        setFiles((prevFiles) => {
            let duplicateSearch = fileTracker.filter(fileName => fileName.fileId === id);
            if (duplicateSearch.length !== 0) {
                let deduplicatedFiles = prevFiles.filter(prevFile => prevFile.name !== duplicateSearch[0].fileName);
                return [...deduplicatedFiles, file];
            } else {
                return [...prevFiles, file]
            }
        });
        setFileTracker((prevFileTracker) => {
            let deduplicatedFileTracker = prevFileTracker.filter(trackedFile => trackedFile.fileId !== id);
            return [...deduplicatedFileTracker, {
                fileId: id,
                fileName: file.name
            }]
        })
    }
    
    function handlePost(e) {
        e.preventDefault();
        if (!files) {
            console.log("Files not found.")
            return;
        }
        const formData = new FormData();
        formData.append('content', JSON.stringify(content))
        files.forEach((file) => {
            formData.append('files[]', file)
        })
        formData.append('fileTracker', JSON.stringify(fileTracker))
        fetch('/api/posts', {
            method: 'POST',
            mode: 'cors',
            body: formData
        })
            .then(response => response.json())
            .then((response) => {
                if (response.status === 'success') {
                    setModalState({
                        state: 'Success!',
                        message: 'Your new post will be visible on the Places page.'
                    })
                    setContent({
                        city: '',
                        country: '',
                        firstParagraph: '',
                        secondParagraph: ''
                    });
                    setFileTracker([]);
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
                <div className='post-frm-ctr'>
                    <h1 className='small-hd form-hd'>Create a post</h1>
                    <form encType='multipart/form-data' onSubmit={handlePost}>
                        <div className='flex column form-inpt-grp'>
                            <label className='body-txt form-inpt-labl'>City</label>
                            <input 
                                id='city'
                                type='text'
                                value={content.city}
                                autoComplete='off'
                                placeholder='Gondor'
                                required
                                className='body-txt form-inpt' 
                                onChange={e => setContent(prevState => ({
                                    ...prevState,
                                    city: e.target.value
                                }))}
                            />                         
                        </div>                
                        <div className='flex column form-inpt-grp'>
                            <label className='body-txt form-inpt-labl'>Country</label>
                            <input 
                                id='country'
                                type='text'
                                value={content.country}
                                autoComplete='off'
                                placeholder='Middle Earth'
                                required
                                className='form-inpt body-txt' 
                                onChange={e => setContent(prevState => ({
                                    ...prevState,
                                    country: e.target.value
                                }))}
                            />                         
                        </div>
                        <div className='flex column form-inpt-grp'>
                            <label className='body-txt form-inpt-labl'>First Image</label>
                            <label htmlFor='first-image' className='flex row form-file-input'>
                                <span className='btn-outline'>Browse</span>
                                <span className='sub-txt form-filename'>
                                    { !fileTracker.find(trackedFile => trackedFile.fileId === 'first-image') ? 
                                        'Choose a file' : 
                                        fileTracker.find(trackedFile => trackedFile.fileId === 'first-image').fileName
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
                            { fileErrors['first-image'] ? <p className='sub-txt form-err'>File exceeds 5MB size limit.</p> : null }
                        </div>
                        <div className='flex column form-inpt-grp'>
                            <label className='body-txt form-inpt-labl'>First Paragraph</label>
                            <textarea 
                                id='first-paragraph'
                                value={content.firstParagraph}
                                autoComplete='off'
                                placeholder='The world is changed. I feel it in the water. I feel it in the earth. I smell it in the air.'
                                required
                                className='form-inpt form-textarea body-txt'
                                onChange={e => setContent(prevState => ({
                                    ...prevState,
                                    firstParagraph: e.target.value
                                }))}
                            />
                        </div>
                        <div className='flex column form-inpt-grp'>
                            <label className='body-txt form-inpt-labl'>Second Image</label>
                            <label htmlFor='second-image' className='flex row form-file-input'>
                                <span className='btn-outline'>Browse</span>
                                <span className='sub-txt form-filename'>
                                    { !fileTracker.find(trackedFile => trackedFile.fileId === 'second-image') ? 
                                        'Choose a file' : 
                                        fileTracker.find(trackedFile => trackedFile.fileId === 'second-image').fileName
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
                            { fileErrors['second-image'] ? <p className='sub-txt form-err'>File exceeds 5MB size limit.</p> : null }                     
                        </div>
                        <div className='flex column form-inpt-grp'>
                            <label className='body-txt form-inpt-labl'>Second Paragraph</label>
                            <textarea 
                                id='second-paragraph'
                                value={content.secondParagraph}
                                autoComplete='off'
                                placeholder="End? No, the journey doesn't end here. Death is just another path, one that we all must take."
                                required
                                className='form-inpt form-textarea body-txt'
                                onChange={e => setContent(prevState => ({
                                    ...prevState,
                                    secondParagraph: e.target.value
                                }))}
                            />                        
                        </div>
                        <div className='flex row form-btn-ctr'>
                            <div><button type='submit' className='btn'>Submit</button></div>
                            <div><button type='button' className='btn-outline' onClick={() =>{navigate(-1)}}>Cancel</button></div>                   
                        </div>                    
                    </form>
                </div>
            </div>
            <Modal ref={modalRef} modalInfo={modalState}></Modal>
        </>
    )
}

export default CreatePost