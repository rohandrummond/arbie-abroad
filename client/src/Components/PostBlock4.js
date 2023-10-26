import React from 'react'
import './PostBlock4.css'
import image from './PostBlock2SVG.svg'

function PostBlock4(props) {
    return (
        <div className="container post-component-4-container">
            <div className="row">
                <div className="col post-component-4-paragraph-container">
                    <p className="post-component-4-paragraph">{props.paragraph}</p>
                </div>
                <div className="col post-component-4-image-container">
                    <img className="post-component-4-background" src={image}></img>
                    <img className="post-component-4-image post-component-4-image-1" src={props.imageOneSource}></img>
                    <p className="post-component-4-image-1-caption">{props.imageOneCaption}</p>
                    <img className="post-component-4-image post-component-4-image-2" src={props.imageTwoSource}></img>
                    <p className="post-component-4-image-2-caption">{props.imageTwoCaption}</p>
                </div>
            </div>
        </div>
    );
}

export default PostBlock4