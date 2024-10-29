import React from 'react'
import Header from './components/Header'
import Form from './components/Form'

function Login() {
    return (
        <div>
            <Header />
            <Form
                heading='Login to your account'
                button='Login'
            />
        </div>
    )
}

export default Login