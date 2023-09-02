import React from 'react'
import './PostComponent2.css'
import image from './PostComponent2Background.svg'

function PostComponent2() {
    return (
        <div className="container post-component-2-container">
            <div className="row">
                <div className="col post-component-2-image-container">
                    <img className="post-component-2-background" src={image}></img>
                    <img className="post-component-2-image post-component-2-image-1" src="https://images.unsplash.com/photo-1584198414538-f469f6fad430?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3326&q=80"></img>
                    <p className="post-component-2-image-1-caption">Newtown Food Centre</p>
                    <img className="post-component-2-image post-component-2-image-2" src="https://images.unsplash.com/photo-1581601442673-c3370bb99d8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3200&q=80"></img>
                    <p className="post-component-2-image-2-caption">Hainanese Chicken</p>
                </div>
                <div className="col post-component-2-paragraph-container">
                    <p className="post-component-2-paragraph">Singaporean cuisine is a delightful blend of Chinese, Malay, Indian, and Peranakan influences.
                        This mix of cultures has given birth to a tapestry of flavors that have been passed down through
                        generations, resulting in a harmonious symphony of tastes in every dish. Whether you're craving
                        spicy curries, aromatic stir-fries, or mouthwatering noodle dishes, Singapore has it all.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PostComponent2