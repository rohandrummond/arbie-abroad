import React from 'react'
import './PostBlock2.css'
import image from './PostBlock2SVG.svg'

function PostBlock2(props) {
    return (
        <div className="container post-component-2-container">
            <div className="row">
                <div className="col post-component-2-image-container">
                    <img className="post-component-2-background" src={image}></img>
                    <img className="post-component-2-image post-component-2-image-1" src={props.imageOneSource}></img>
                    <p className="post-component-2-image-1-caption">{props.imageOneCaption}</p>
                    <img className="post-component-2-image post-component-2-image-2" src={props.imageTwoSource}></img>
                    <p className="post-component-2-image-2-caption">{props.imageTwoCaption}</p>
                </div>
                <div className="col post-component-2-paragraph-container">
                    <p className="post-component-2-paragraph">{props.paragraph}</p>
                </div>
            </div>
        </div>
    );
}

export default PostBlock2
