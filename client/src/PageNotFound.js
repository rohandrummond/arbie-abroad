import React from 'react'
import Nav from './components/Nav';
import PageError from './components/PageError';

function PageNotFound() {
    return (
        <>
            <Nav></Nav>
            <PageError
                code={404}
                message='Oops! The page you are looking for does not exist.'
            />        
        </>
    )
}   

export default PageNotFound