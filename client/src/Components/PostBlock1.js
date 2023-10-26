import React from 'react'
import image from './PostBlock1SVG.svg'
import './PostBlock1.css'

function PostBlock1(props) {
    return (
        <div className="container post-component-1-container">
            <img className="post-component-1-background" src={image}></img>
            <div className="row">
                <div className="col post-component-1-paragraph-container">
                    <p className="post-component-1-paragraph">{props.paragraph}</p>
                </div>
                <div className="col post-component-1-image-container">
                    <div>
                        <img className="post-component-1-image post-component-1-image-1" src={props.imageOneSource}></img>
                        <p className="post-component-1-image-1-caption">{props.imageOneCaption}</p>
                    </div>
                    <div>
                        <img className="post-component-1-image post-component-1-image-2" src={props.imageTwoSource}></img>
                        <p className="post-component-1-image-2-caption">{props.imageTwoCaption}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostBlock1