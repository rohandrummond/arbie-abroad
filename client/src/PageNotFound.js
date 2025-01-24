import React from 'react'
import Nav from './components/Nav';
import PageError from './components/PageError';

function PageNotFound() {
    return (
        <div className='flex column full-vp'>
            <Nav></Nav>
            <PageError
                code={404}
                message='One does not simply find this page.'
            />        
        </div>
    )
}   

export default PageNotFound