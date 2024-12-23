import React from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Nav from './components/Nav'
import Form from './components/Form'

function Register() {
    const { authenticated } = useSelector((state) => state.authenticator);
    if (authenticated) {
        return (
            <Navigate to='/posts' replace />
        )
    }
    return (
        <div>
            <Nav></Nav>
            <Form
                heading="Create an account"
                button="Register"
            />
        </div>
    )
}

export default Register