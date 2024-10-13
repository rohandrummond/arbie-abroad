import React from 'react'

function PostsCard(props) {
    return (
        <div className='flex column post-card shrink-mnr'>
            <img 
                className='post-card-image' 
                src={props.image}
            />
            <h2 className='post-card-heading'>{props.title}</h2>            
        </div>
    );
}

export default PostsCard