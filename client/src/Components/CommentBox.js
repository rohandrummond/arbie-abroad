import React, { useEffect, useState } from 'react';
import { useSelector} from 'react-redux'
import Comments from './Comments'
import CommentsEmpty from  './CommentsEmpty'

function CommentBox(props) {

    const [existingComments, setExistingComments] = useState([]);
    const [comment, setComment] = useState("");

    async function fetchComments() {
        try {
            const response = await fetch(`/api/comments/${props.postId}`);
            const data = await response.json();
            setExistingComments(data);
        } catch (e) {
            console.error('Error fetching JSON data:', e);
        }
    }

    useEffect(() => {
        fetchComments();
    }, []);

    const { authenticated, userInfo } = useSelector((state) => state.authenticator);

    function handleCommentSubmit(e) {
        e.preventDefault();
        alert('Form submitted')
        const commentData = {
            "userId": userInfo._id,
            "firstName": userInfo.firstName,
            "lastName": userInfo.lastName,
            "postId": props.postId,
            "comment": comment
        }
        fetch('/api/comments', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(commentData)
        })
            .then((response) => {
                if (response.ok) {
                    setComment('')
                    fetchComments();
                } else {
                    // Throw error
                }
            })
    }

    return (
        <>
            <div className='comments-container'>
                <h2 className='comments-heading'>comments</h2>
                { 
                    existingComments.length !== 0 ?
                    <Comments comments={existingComments}></Comments> :
                    <CommentsEmpty></CommentsEmpty> 
                }
                <form onSubmit={handleCommentSubmit}>
                    <div className={`flex row comment-input-group ${ !authenticated ? 'comment-disabled' : ''}`}>
                        <input
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                            className='comment-input'
                            required
                            disabled={!authenticated}
                            placeholder={
                                authenticated 
                                ? 'Leave a comment' 
                                : 'Please login to leave a comment' 
                            }
                        />
                        <button className='comment-button' disabled={!authenticated}>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CommentBox

