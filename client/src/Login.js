import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import UserDetails from './Components/UserDetails'

function Login() {
    return (
        <div>
            <Header />
            <UserDetails
                instructions='Welcome back!'
                button='Log in'
                route='/api/login'
            />
            <Footer />
        </div>
    )
}

export default Login