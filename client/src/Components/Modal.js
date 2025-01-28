import React, { forwardRef, useImperativeHandle } from 'react';
import { useNavigate } from 'react-router-dom';

const Modal = forwardRef((props, ref) => {
    const navigate = useNavigate();
    const showModal = () => {
        document.querySelector('.modal-bg').classList.add('show-modal');
        document.querySelector('.modal').classList.add('show-modal');
    };
    const hideModal = () => {
        document.querySelector('.modal-bg').classList.add('hide-modal');
        document.querySelector('.modal').classList.add('hide-modal');
        const path = window.location.pathname;
        if (path === '/create-post' || path.startsWith('/edit-post')) {
            navigate('/manage-posts')
        };
    };
    useImperativeHandle(ref, () => {
        return {
            showModal
        }
    });
    return (
        <>
            <div className='modal-bg'>
                <div className='modal'>
                    <p className='body-txt modal-hd'>{props.modalInfo.state}</p>
                    <p className='sub-txt modal-msg'>{props.modalInfo.message}</p>
                    <button className='btn-outline' onClick={hideModal}>Close</button>
                </div>
            </div>
        </>
    )});

export default Modal