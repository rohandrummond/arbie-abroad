import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Nav from './components/Nav';
import Loader from './components/Loader';

function EditPost () {

    const { authenticated, userInfo } = useSelector((state) => state.authenticator);

    const location = useLocation();
    const { post } = location.state;

    const [content, setContent] = useState({
        city: post.city,
        country: post.country,
        firstParagraph: post.firstParagraph,
        secondParagraph: post.secondParagraph
    });

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

    function handlePost(e) {
        e.preventDefault();
        console.log("Handle submission logic being triggered.")
        console.log(content)
    }

    return (
        <>
            {loading && <Loader />}
            <Nav></Nav>
            <div className='flex column centered'>
                <div className='create-post-frm-ctr'>
                    <h1 className='small-hd create-post-hd'>Edit your {post.city} post</h1>
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
                            <div className='flex column'>
                                <label className='body-txt form-inpt-labl'>First Image</label>
                                <span class='btn-outline'>Change</span>
                            </div>
                            <img
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
                        {/* <div className='flex column form-inpt-grp'>
                            <label className='body-txt form-inpt-labl'>First Image</label>
                            <label htmlFor='first-image' className='flex row form-file-input'>
                                <span className='btn-outline'>Browse</span>
                                <span className='sub-txt form-file-name'>
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
                            { fileErrors['first-image'] ? <p className='sub-txt form-err'>File exceeds 5MB size limit.</p> : null }
                        </div> */}
                        <div className='flex row form-inpt-grp form-img-prvw-ctr'>
                            <div className='flex column'>
                                <label className='body-txt form-inpt-labl'>Second Image</label>
                                <span class='btn-outline'>Change</span>
                            </div>
                            <img
                                src={`/api/images/${post.images[1]}`} 
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
                        {/* <div className='flex column form-inpt-grp'>
                            <label className='body-txt form-inpt-labl'>Second Image</label>
                            <label htmlFor='second-image' className='flex row form-file-input'>
                                <span className='btn-outline'>Browse</span>
                                <span className='sub-txt form-file-name'>
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
                            { fileErrors['second-image'] ? <p className='sub-txt form-err'>File exceeds 5MB size limit.</p> : null }                     
                        </div> */}
                        <div><button type='submit' className='btn'>Submit</button></div>
                    </form>
                </div>
            </div>
            {/* <Modal ref={modalRef} modalInfo={modalState}></Modal> */}
        </>
    )
}

export default EditPost