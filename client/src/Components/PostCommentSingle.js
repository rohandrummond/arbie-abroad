import React from 'react';
import './PostCommentSingle.css'

function PostCommentSingle(props) {
    return (
        <div className="post-comment" >
            <p className="post-comment-text"><span className="post-comment-author">{props.author}: </span><span className="post-comment-body">{props.body}</span></p>
        </div>

    )
}

export default PostCommentSingle

