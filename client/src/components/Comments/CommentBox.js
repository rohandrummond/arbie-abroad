import React, { useCallback, useEffect, useState } from 'react';
import { useSelector} from 'react-redux'
import Comments from './Comments'
import CommentsEmpty from  './CommentsEmpty'

function CommentBox(props) {

    const [existingComments, setExistingComments] = useState([]);
    const [comment, setComment] = useState("");

    const fetchComments = useCallback(async () => {
        try {
            const response = await fetch(`/api/comments/${props.postId}`);
            const data = await response.json();
            setExistingComments(data);
        } catch (e) {
            console.error('Error fetching JSON data:', e);
        }
    }, [props.postId])

    useEffect(() => {
        fetchComments();
    }, [fetchComments]);

    const { authenticated, userInfo } = useSelector((state) => state.authenticator);

    function handleCommentSubmit(e) {
        e.preventDefault();
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
            <div className='comments-ctr'>
                <h2 className='comments-hd'>Comments</h2>
                { 
                    existingComments.length !== 0 ?
                    <Comments comments={existingComments} onDelete={fetchComments}></Comments> :
                    <CommentsEmpty></CommentsEmpty> 
                }
                <form onSubmit={handleCommentSubmit}>
                    <div className={`flex form-inpt-grp comment-inpt-grp ${ !authenticated ? 'comment-dsbled' : ''}`}>
                        <input
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                            className='form-inpt comment-inpt'
                            required
                            disabled={!authenticated}
                            placeholder={
                                authenticated 
                                ? 'Leave a comment' 
                                : 'Please login to leave a comment' 
                            }
                        />
                        <button className='comment-btn body-txt' disabled={!authenticated}>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CommentBox

