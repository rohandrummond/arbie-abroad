import React from 'react'
import './PostsCard.css'

function PostsCard(props) {
    return (
        <div className="col">
            <div className="card">
                <img src={props.image} alt="Thumbnail" className="card-img-top" />
                <div className="card-body">
                    <h3 className="image-title">{props.title}</h3>
                    <p className="card-text">{props.body}</p>
                </div>
            </div>
        </div>
    );
}

export default PostsCard