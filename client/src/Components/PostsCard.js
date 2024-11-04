import React from 'react'

function PostsCard(props) {
    return (
        <div className='flex column post-card shrink-mnr'>
            <img 
                className='post-card-image' 
                src={props.image}
                onLoad={props.onImageLoad}å
            />
            <h2 className='post-card-heading'>{props.city.toLowerCase()}</h2>            
        </div>
    );
}

export default PostsCard