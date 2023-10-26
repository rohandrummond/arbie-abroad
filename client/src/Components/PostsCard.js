import React from 'react'
import './PostsCard.css'

function PostsCard(props) {
    return (
        <div className="col">
            <a href={props.link} className="card-link">
                <div className="post-card card">
                    <img src={props.image} alt="Thumbnail" className="post-card-image card-img-top" />
                    <div className="post-card-body card-body">
                        <h3 className="post-card-title image-title">{props.title}</h3>
                        <p className="card-text">{props.body}</p>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default PostsCard