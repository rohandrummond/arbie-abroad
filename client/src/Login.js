import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Form from './Components/Form'

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