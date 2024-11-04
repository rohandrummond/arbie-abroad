import React from 'react'
import Header from './components/Header';
import PageError from './components/PageError';

function PageForbidden() {
    return (
        <>
            <Header></Header>
            <PageError
                code={401}
                message='You neeed to be signed into an Admin account to access this page'
            />
        </>
    )
}   

export default PageForbidden