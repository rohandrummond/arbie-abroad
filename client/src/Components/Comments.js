import React from "react";

function Comments(props) {
    return (
        <>
            {props.comments.map((comment) => (
                <div className='comment flex row' key={comment._id}>
                    <p className='comment-author'>{comment.firstName.toLowerCase()}: </p>
                    <p className='comment-body'>{comment.comment.toLowerCase()}</p>
                </div>
            ))}
        </>
    )
}

export default Comments