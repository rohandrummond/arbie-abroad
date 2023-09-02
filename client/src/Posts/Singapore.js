import React from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import PostComponent1 from '../Components/PostComponent1'
import PostComponent2 from '../Components/PostComponent2'
import PostComponent3 from '../Components/PostComponent3'
import PostComponent4 from '../Components/PostComponent4'

import './Singapore.css'

function Singapore() {

    return (
        <div>
            <Header />
            <h1 className="post-title">Singapore</h1>
            <PostComponent1 />
            <PostComponent2 />
            <PostComponent3 />
            <PostComponent4 />
            <Footer />
        </div>
    )
}

export default Singapore