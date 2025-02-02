import React from "react";
import { useSelector } from 'react-redux';

function Comments(props) {
    const { userInfo } = useSelector((state) => state.authenticator);
    async function handleCommentDelete(e) {
        try {
            const commentInfo = { commentId: e.target.id };
            const response = await fetch(`/api/comments`, {
                method: 'DELETE',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(commentInfo)
            });
            const data = await response.json();
            if (data.status === 'success') {
                props.onDelete();
            }
        } catch (e) {
            console.error('Error deleteing comment:', e);
        }
    }
    
    return (
        <>
            {props.comments.map((comment) => (
                <div className='comment flex' key={comment._id}>
                    <p className='comment-athr'>{comment.firstName.toLowerCase()}: </p>
                    <p className='comment-txt body-txt'>{comment.comment.toLowerCase()}</p>
                    {
                        userInfo && (userInfo.type === 'admin' || userInfo._id === comment.userId)
                        ? <img 
                            src='/delete.svg' 
                            alt='Delete comment'
                            className='comment-dlt' 
                            id={comment._id}
                            onClick={handleCommentDelete}
                        />
                        : ''
                    }      
                </div>
            ))}
        </>
    )
}

export default Comments