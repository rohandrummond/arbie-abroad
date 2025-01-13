import React from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Nav from './components/Nav'
import AuthForm from './components/AuthForm'

function Login() {
    const { authenticated } = useSelector((state) => state.authenticator);
    if (authenticated) {
        return (
            <Navigate to='/' replace />
        )
    }
    return (
        <div className='flex column full-vp'>
            <Nav />
            <AuthForm
                heading='Login to your account'
                button='Login'
            />
        </div>
    )
}

export default Login