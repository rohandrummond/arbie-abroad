import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import UserDetails from './Components/UserDetails'
import image from './login-background.svg'
import './Login.css'

function Login() {
    return (
        <div>
            <Header />
            <div className="login-background-svg">
                <img src={image}></img>
            </div>
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