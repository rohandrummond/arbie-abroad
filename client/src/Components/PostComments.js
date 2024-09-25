import React, { useEffect, useState } from 'react';
import PostCommentSingle from './PostCommentSingle';

function PostComments() {

    // Fetch comments for post
    const [existingComments, setExistingComments] = useState([]);
    async function fetchComments() {
        try {
            const response = await fetch(`/api/fetchComments/${window.location.pathname.split('/').pop()}`);
            const data = await response.json();
            setExistingComments(data);
        } catch (e) {
            console.error('Error fetching JSON data:', e);
        }
    }

    // Fetch user details 
    const [username, setUsername] = useState("");
    async function fetchUser() {
        try {
            const response = await fetch('/api/session');
            const data = await response.json();
            if (data.user) {
                setUsername(data.user);
            }
        } catch (e) {
            console.error('Error fetching JSON data:', e);
        }
    };

    useEffect(() => {
        fetchComments();
        fetchUser();
    }, []);

    // Create useState hook to capture comment and control form input
    const [comment, setComment] = useState("");
    function handleCommentChange(e) {
        setComment(e.target.value);
    }

    // Submit comment to API 
    function handleCommentSubmit(e) {
        e.preventDefault();
        const commentJson = {
            "user": username,
            "path": window.location.pathname,
            "comment": comment
        }
        fetch('/api/addComment', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(commentJson)
        })
            .then(() => {
                console.log("Fetching comments")
                fetchComments();
                setComment("");
            })
    }

    return (
        <div className="container post-comments-container">
            <h1>Comments</h1>
            <div className="existing-comments">
                {existingComments.map((existingComment, index) => (
                    <PostCommentSingle
                        key={index}
                        id={index}
                        author={existingComment.user}
                        body={existingComment.comment}
                    />
                ))}
            </div>
            <form className={`post-comment-box-form ${!username && 'post-comment-disabled'}`} onSubmit={handleCommentSubmit}>
                <div className="input-group">
                    <input
                        className="form-control post-comment-input"
                        placeholder={username ? "Comment here ✍️" : "Log in to comment 🙂"}
                        onChange={handleCommentChange}
                        value={comment}
                        id="comment"
                        autoComplete="off"
                        required
                    />
                    <div className="input-group-append button-div">
                        <button className="btn post-comment-button" type="submit">
                            Comment
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PostComments

