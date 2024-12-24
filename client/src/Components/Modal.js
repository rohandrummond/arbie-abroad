import React, { forwardRef, useImperativeHandle } from 'react';

const Modal = forwardRef((props, ref) => {
    const showModal = () => {
        document.querySelector('.modal-background').classList.add('show-modal');
        document.querySelector('.modal').classList.add('show-modal');
    };
    const hideModal = () => {
        document.querySelector('.modal-background').classList.add('hide-modal');
        document.querySelector('.modal').classList.add('hide-modal');
    };
    useImperativeHandle(ref, () => {
        return {
            showModal
        }
    });
    return (
        <>
            <div className='modal-background'>
                <div className='modal'>
                    <p className='modal-state'>{props.modalInfo.state}</p>
                    <p className='modal-message'>{props.modalInfo.message}</p>
                    <button className='button-3d-outline' onClick={hideModal}>Close</button>
                </div>
            </div>
        </>
    )});

export default Modal