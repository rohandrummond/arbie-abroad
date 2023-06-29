import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import UserDetails from './Components/UserDetails'

function Login() {
    return (
        <div>
            <Header />
            <UserDetails
                instructions='Login to your account'
                button='Login'
                route='/api/login'
            />
            <Footer />
        </div>
    )
}

export default Login