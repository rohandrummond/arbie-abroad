import React, { forwardRef, useImperativeHandle } from 'react';
import { useNavigate } from 'react-router-dom';

const Modal = forwardRef((props, ref) => {
    const navigate = useNavigate();
    const modalBackground = document.querySelector('.modal-bg');
    const modal = document.querySelector('.modal')
    const showModal = () => {
        modalBackground.classList.remove('hide-modal');
        modal.classList.remove('hide-modal');
        modalBackground.classList.add('show-modal');
        modal.classList.add('show-modal');
    };
    const hideModal = () => {
        modalBackground.classList.add('hide-modal');
        modal.classList.add('hide-modal');
        modalBackground.classList.remove('show-modal');
        modal.classList.remove('show-modal');
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