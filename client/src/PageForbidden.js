import React from 'react'
import Nav from './components/Nav';
import PageError from './components/PageError';

function PageForbidden() {
    return (
        <>
            <Nav></Nav>
            <PageError
                code={401}
                message='You neeed to be signed into an Admin account to access this page'
            />
        </>
    )
}   

export default PageForbidden