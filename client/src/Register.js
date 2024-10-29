import React from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Footer from './components/Footer'

function Register() {
    return (
        <div>
            <Header />
            <Form
                heading="Create an account"
                button="Register"
            />
            <Footer />
        </div>
    )
}

export default Register