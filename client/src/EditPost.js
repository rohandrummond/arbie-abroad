import React, { useState } from 'react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Nav from './components/Nav';
import Loader from './components/Loader';

function EditPost () {

    const { authenticated, userInfo } = useSelector((state) => state.authenticator);

    const location = useLocation();
    const { post } = location.state;

    const navigate = useNavigate();

    const [content, setContent] = useState({
        city: post.city,
        country: post.country,
        firstParagraph: post.firstParagraph,
        secondParagraph: post.secondParagraph
    });

    const [files, setFiles] = useState([]);
    const [fileNames, setFilenames] = useState([]);
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
        console.log("Handle file change being triggered")
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
        console.log(content)
    }

    return (
        <>
            {loading && <Loader />}
            <Nav></Nav>
            <div className='flex column centered'>
                <div className='post-frm-ctr'>
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
                        <div className='flex row form-inpt-grp form-img-prvw-ctr'>
                            <label htmlFor='first-image' className='flex column edit-post-file-lbl'>
                                <span className='body-txt form-inpt-labl'>First Image</span>
                                <span className='btn-outline'>Change</span>
                                { 
                                    fileNames.find(file => file.fileId === 'first-image') &&
                                    <span className='sub-txt edit-post-filename'>{fileNames.find(file => file.fileId === 'first-image').fileName}</span>
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
                                src={`/api/images/${post.images[0]}`} 
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
                        <div className='flex row form-inpt-grp form-img-prvw-ctr'>
                            <label htmlFor='second-image' className='flex column edit-post-file-lbl'>
                                <span className='body-txt form-inpt-labl'>Second Image</span>
                                <span className='btn-outline'>Change</span>
                                { 
                                    fileNames.find(file => file.fileId === 'second-image') &&
                                    <span className='sub-txt edit-post-filename'>{fileNames.find(file => file.fileId === 'second-image').fileName}</span>
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
                                src={`/api/images/${post.images[0]}`} 
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
            {/* <Modal ref={modalRef} modalInfo={modalState}></Modal> */}
        </>
    )
}

export default EditPost