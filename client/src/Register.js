import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import UserDetails from './Components/UserDetails'

function Register() {
    return (
        <div>
            <Header />
            <UserDetails
                instructions="Create an account"
                button="Create"
                route="/api/register"
            />
            <Footer />
        </div>
    )
}

export default Register