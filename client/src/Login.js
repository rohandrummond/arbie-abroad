import React from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Nav from './components/Nav'
import Form from './components/Form'

function Login() {
    const { authenticated } = useSelector((state) => state.authenticator);
    if (authenticated) {
        return (
            <Navigate to='/' replace />
        )
    }
    return (
        <div>
            <Nav />
            <Form
                heading='Login to your account'
                button='Login'
            />
        </div>
    )
}

export default Login