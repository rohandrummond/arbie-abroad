import React from 'react'

function PageError(props) {
    return (
        <>
            <div className='flex column centered error-container'>
                <h1 className='error-code'>{props.code}</h1>
                <p className='error-message'>{props.message}</p>
                <a href='/'>
                    <div className='flex row centered btn-brown shrink-mnr'>
                        <img src='back-arrow-light.svg' className='btn-icon'></img>
                        <span>Back to Home</span>
                    </div>
                </a>
            </div>
        </>
    )
}   

export default PageError