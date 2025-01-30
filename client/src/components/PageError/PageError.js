import React from 'react'

function PageError(props) {
    return (
        <div className='flex column centered err-ctr'>
            <h1 className='err-hd'>{props.code}</h1>
            <p className='body-txt'>{props.message}</p>
            <a href='/'>
                <div className='flex row centered btn err-btn'>
                    <span>Back to home</span>
                </div>
            </a>
        </div>
    )
}   

export default PageError