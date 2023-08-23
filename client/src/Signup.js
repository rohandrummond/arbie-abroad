import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import UserDetails from './Components/UserDetails'

function Signup() {
    return (
        <div>
            <Header />
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