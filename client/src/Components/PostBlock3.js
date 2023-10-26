import React from 'react'
import image from './PostBlock3SVG.svg'
import PostsCard from './PostsCard';
import './PostBlock3.css'

function PostBlock3(props) {
    return (
        <div>
            <div className="container post-component-3-container">
                <div className="row">
                    <div className="col post-component-3-image-container">
                        <div>
                            <img className="post-component-3-background" src={image}></img>
                            <img className="post-component-3-image" src={props.mainImageSource}></img>
                            <p className="post-component-3-image-caption">{props.mainImageCaption}</p>
                        </div>
                    </div>
                    <div className="col post-component-3-paragraph-container">
                        <p className="post-component-3-paragraph">{props.paragraph}</p>
                    </div>

                </div>
            </div>
            <div className="album post-component-3point5-container">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
                        <div className="col">
                            <div className="post-card card">
                                <img src={props.subImageOneSource} alt="Thumbnail" className="post-card-image card-img-top" />
                                <div className="post-card-body card-body">
                                    <p className="post-component-3point5-image-caption">{props.subImageOneCaption}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="post-card card">
                                <img src={props.subImageTwoSource} alt="Thumbnail" className="post-card-image card-img-top" />
                                <div className="post-card-body card-body">
                                    <p className="post-component-3point5-image-caption">{props.subImageTwoCaption}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="post-card card">
                                <img src={props.subImageThreeSource} alt="Thumbnail" className="post-card-image card-img-top" />
                                <div className="post-card-body card-body">
                                    <p className="post-component-3point5-image-caption">{props.subImageThreeCaption}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostBlock3