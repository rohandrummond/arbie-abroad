import React from 'react'

function PlacesCard(props) {
    return (
        <div className='flex column places-crd'>
            <img 
                className='places-crd-img' 
                alt={props.city}
                src={props.image}
                onLoad={props.onImageLoad}
            />
            <p className='body-txt'>{props.city}</p>            
        </div>
    );
}

export default PlacesCard