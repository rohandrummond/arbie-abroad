import React from 'react'
import Nav from './components/Nav';
import PageError from './components/PageError';

function PageForbidden() {
    return (
        <div className='flex column full-vp'>
            <Nav></Nav>
            <PageError
                code={401}
                message='Keep it secret, keep it safe.'
            />
        </div>
    )
}   

export default PageForbidden