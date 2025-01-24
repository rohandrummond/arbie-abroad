import React from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Nav from './components/Nav'
import AuthForm from './components/AuthForm'

function Register() {
    const { authenticated } = useSelector((state) => state.authenticator);
    if (authenticated) {
        return (
            <Navigate to='/' replace />
        )
    }
    return (
        <div className='flex column full-vp'>
            <Nav></Nav>
            <AuthForm
                heading="Create an account"
                button="Register"
            />
        </div>
    )
}

export default Register