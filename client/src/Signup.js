import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import UserDetails from './Components/UserDetails'
import image from './signup-background.svg'
import './Signup.css'

function Signup() {
    return (
        <div>
            <Header />
            <div className="signup-background-svg">
                <img src={image}></img>
            </div>
            <UserDetails
                instructions="Welcome!"
                button="Sign up"
                route="/api/signup"
            />
            <Footer />
        </div>
    )
}

export default Signup