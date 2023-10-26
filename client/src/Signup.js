import React from 'react'
import Header from './Components/Header'
import LoginAndSignupForm from './Components/LoginAndSignupForm'
import SignupSVG from './SignupSVG.svg'
import Footer from './Components/Footer'
import './Signup.css'

function Signup() {
    return (
        <div>
            <Header />
            <div className="signup-svg">
                <img src={SignupSVG} alt="Signup SVG"></img>
            </div>
            <LoginAndSignupForm
                instructions="Welcome!"
                button="Sign up"
                route="/api/signup"
            />
            <Footer />
        </div>
    )
}

export default Signup