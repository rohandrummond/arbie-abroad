import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import LoginAndSignupForm from './Components/LoginAndSignupForm'
import LoginSVG from './LoginSVG.svg'
import './Login.css'

function Login() {
    return (
        <div>
            <Header />
            <div className="login-svg">
                <img src={LoginSVG} alt="Login SVG"></img>
            </div>
            <LoginAndSignupForm
                instructions='Welcome back!'
                button='Log in'
                route='/api/login'
            />
            <Footer />
        </div>
    )
}

export default Login