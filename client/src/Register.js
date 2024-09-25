import React from 'react'
import Header from './Components/Header'
import Form from './Components/Form'
import Footer from './Components/Footer'

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