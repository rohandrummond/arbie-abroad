import React from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header'
import Form from './components/Form'

function Register() {
    const { authenticated, userInfo } = useSelector((state) => state.authenticator);
    if (authenticated) {
        return (
            <Navigate to='/' replace />
        )
    }
    return (
        <div>
            <Header />
            <Form
                heading="Create an account"
                button="Register"
            />
        </div>
    )
}

export default Register