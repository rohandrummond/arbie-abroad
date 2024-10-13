import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'


function About() {
    return (
        <div>
            <Header />
                <div className='flex row about-container'>
                    <div className='flex column about-text-container'>
                        <h1 className='about-heading'>hello.</h1>
                        <p className='about-paragraph'>Rohan & Britt here. We created this website to use as a place to store all of our travel memories.</p>
                        <p className='about-paragraph'>It also doubles as a passion project for Rohan’s web development portfolio. So for any potential future employers out there, please hire me.</p>
                        <p className='about-paragraph'>If you’ve somehow found yourself on this page and don’t know us, we’re a young couple from New Zealand who quit our corporate jobs to travel the world and start our own business.</p>
                        {/* <div className='flex row about-icons-container'>
                            <img src='instagram.svg'></img>
                            <img src='email.svg'></img>
                        </div> */}
                    </div>
                    <img className='about-image' src='about-photo.png'></img>
                </div>
        </div>
    )
}

export default About