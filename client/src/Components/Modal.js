import React, { forwardRef, useImperativeHandle } from 'react';

const Modal = forwardRef((props, ref) => {
    const showModal = () => {
        console.log("showModal being triggered")
        document.querySelector('.modal-bg').classList.add('show-modal');
        document.querySelector('.modal').classList.add('show-modal');
    };
    const hideModal = () => {
        document.querySelector('.modal-bg').classList.add('hide-modal');
        document.querySelector('.modal').classList.add('hide-modal');
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