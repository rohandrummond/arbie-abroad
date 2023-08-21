import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import logo from './about-us-arbie.svg'
import './About.css'


function About() {
    return (
        <div>
            <Header />
            <div className="about-us-container container col-xxl-9 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-8 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={logo} className="about-us-image d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="about-us-editorial display-5 lh-1 about-us-title">It's Rohan and Britt 👋</h1>
                        <p className="lead about-us-paragraph">We are currently exploring South East Asia for 6 months. We created this blog to keep you all updated on what we have been up to!</p>
                        <p className="lead about-us-paragraph">For those who don't know us (if anyone other than our family is reading this 😂), we are a young couple from New Zealand who both decided to quit our
                            jobs and take a break from corporate life for a while. Or maybe forever.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About