import React from 'react'
import './PostComponent1.css'
import image from './PostComponent1Background.svg'

function PostComponent1() {
    return (
        <div className="container post-component-1-container">
            <img className="post-component-1-background" src={image}></img>
            <div className="row">
                <div className="col post-component-1-paragraph-container">
                    <p className="post-component-1-paragraph">Singapore, a vibrant city-state known for its rich cultural diversity and futuristic
                        skyline, is also a paradise for food enthusiasts. From bustling hawker centers to upscale restaurants, this Southeast Asian
                        gem offers a tantalizing array of flavors that reflect its multicultural heritage. In this blog post, we'll take a delectable
                        journey through Singapore's food scene, exploring its iconic dishes, must-visit places, and the unique blend of cultures that
                        make its culinary landscape truly exceptional.</p>
                </div>
                <div className="col post-component-1-image-container">
                    <div>
                        <img className="post-component-1-image post-component-1-image-1" src="https://images.unsplash.com/photo-1493966936727-e9e3da7326ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3348&q=80"></img>
                        <p className="post-component-1-image-1-caption">Chinatown</p>
                    </div>
                    <div>
                        <img className="post-component-1-image post-component-1-image-2" src="https://images.unsplash.com/photo-1648366310267-dd4156bc7735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"></img>
                        <p className="post-component-1-image-2-caption">Little India</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostComponent1