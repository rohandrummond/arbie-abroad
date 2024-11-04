import React from 'react'
import Header from './components/Header';
import PageError from './components/PageError';

function PageNotFound() {
    return (
        <>
            <Header></Header>
            <PageError
                code={404}
                message='Oops! The page you are looking for does not exist.'
            />        
        </>
    )
}   

export default PageNotFound