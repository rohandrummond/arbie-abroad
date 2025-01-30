import React, { useState, useRef } from 'react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';

function EditPost () {

    const { authenticated, userInfo } = useSelector((state) => state.authenticator);

    const location = useLocation();
    const { post } = location.state;

    const navigate = useNavigate();

    const modalRef = useRef();
    const [modalState, setModalState] = useState({});

    const [content, setContent] = useState({
        id: post._id,
        city: post.city,
        country: post.country,
        firstParagraph: post.firstParagraph,
        secondParagraph: post.secondParagraph
    });

    const [files, setFiles] = useState([]);
    const [fileTracker, setFileTracker] = useState([]);
    const [fileErrors, setFileErrors] = useState({});

    const [loadedImages, setLoadedImages] = useState(0);
    const [loading, setLoading] = useState(true);

    if (!post) {
        return <Navigate to="/posts" replace />;
    }

    if (!authenticated || userInfo.type !== 'admin') {
        return (
            <Navigate to='/forbidden' replace />
        )
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

    function previewFile(file, imgId) {
        const imgElement = document.getElementById(`${imgId}-el`);
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            imgElement.src = reader.result
        });
        if (file) {
            reader.readAsDataURL(file);
        };
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
        previewFile(file, id);
        setFiles((prevFiles) => {
            let duplicateSearch = fileTracker.filter(trackedFile => trackedFile.fileId === id);
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
        const formData = new FormData();
        formData.append('content', JSON.stringify(content))
        if (files) {
            files.forEach((file) => {
                formData.append('files[]', file)
            })
        }
        formData.append('fileTracker', JSON.stringify(fileTracker))
        fetch('/api/posts', {
            method: 'PUT',
            mode: 'cors',
            body: formData
        })
            .then(response => response.json())
            .then((response) => {
                if (response.status === 'success') {
                    setModalState({
                        state: 'Success!',
                        message: 'Your updated post will be visible on the Places page.'
                    })
                    modalRef.current.showModal();
                } else {
                    setModalState({
                        state: 'Error',
                        message: 'There was a problem editing your post.'
                    })
                    modalRef.current.showModal();
                }
            });
    }

    return (
        <>
            {loading && <Loader />}
            <Nav></Nav>
            <div className='flex column centered'>
                <div className='post-form-ctr'>
                    <h1 className='small-hd form-hd'>Edit your {post.city} post</h1>
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
                        <div className='flex row form-inpt-grp form-img-upld-ctr'>
                            <label htmlFor='first-image' className='flex column form-img-upld-lbl'>
                                <span className='body-txt form-inpt-labl'>First Image</span>
                                <span className='btn-outline'>Change</span>
                                { 
                                    fileTracker.find(trackedFile => trackedFile.fileId === 'first-image') &&
                                    <span className='sub-txt form-img-filename '>{fileTracker.find(trackedFile => trackedFile.fileId === 'first-image').fileName}</span>
                                }
                                { fileErrors['first-image'] ? <p className='sub-txt form-err'>File exceeds 5MB size limit.</p> : null }
                            </label>
                            <input 
                                id='first-image' 
                                type='file' 
                                name='files[]' 
                                accept='image/png, image/jpeg'
                                onChange={handleFileChange} 
                            />
                            <img
                                id='first-image-el'
                                src={`/api/images/${post.firstImage}`} 
                                alt={post.city}
                                className='form-img-prvw'
                                onLoad={handleImageLoad}
                            />
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
                        <div className='flex row form-inpt-grp form-img-upld-ctr'>
                            <label htmlFor='second-image' className='flex column form-img-upld-lbl'>
                                <span className='body-txt form-inpt-labl'>Second Image</span>
                                <span className='btn-outline'>Change</span>
                                { 
                                    fileTracker.find(trackedFile => trackedFile.fileId === 'second-image') &&
                                    <span className='sub-txt form-img-filename '>{fileTracker.find(trackedFile => trackedFile.fileId === 'second-image').fileName}</span>
                                }
                                { fileErrors['second-image'] ? <p className='sub-txt form-err'>File exceeds 5MB size limit.</p> : null }
                            </label>
                            <input 
                                id='second-image' 
                                type='file' 
                                name='files[]' 
                                accept='image/png, image/jpeg'
                                onChange={handleFileChange} 
                            />
                            <img
                                id='second-image-el'
                                src={`/api/images/${post.secondImage}`} 
                                alt={post.city}
                                className='form-img-prvw'
                                onLoad={handleImageLoad}
                            />
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

export default EditPost