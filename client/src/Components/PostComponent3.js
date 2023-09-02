import React from 'react'
import image from './PostComponent3Background.svg'
import PostsCard from './PostsCard';
import './PostComponent3.css'

function PostComponent3() {
    return (
        <div>
            <div className="container post-component-3-container">
                <div className="row">
                    <div className="col post-component-3-paragraph-container">
                        <p className="post-component-3-paragraph">No exploration of Singapore's food culture is complete without a visit to its legendary
                            hawker centers. Maxwell Food Centre, Chinatown Complex Food Centre, and Tiong Bahru Market are just a few of the renowned spots
                            where you can sample a wide range of dishes, from the iconic Hainanese chicken rice to the flavorful laksa, to a spicy noodle soup.
                            One dish that stands out in Singapore's culinary landscape is the famous chilli crab. This sweet, savory, and spicy creation is
                            a testament to Singapore's ability to turn humble ingredients into a gastronomic masterpiece.
                        </p>
                    </div>
                    <div className="col post-component-3-image-container">
                        <div>
                            <img className="post-component-3-background" src={image}></img>
                            <img className="post-component-3-image" src="https://images.unsplash.com/photo-1505817368554-2165b1e42f85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3368&q=80"></img>
                            <p className="post-component-3-image-caption">Chinatown Food Complex</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="album post-component-3point5-container">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
                        <div className="col">
                            <div className="card">
                                <img src="https://images.unsplash.com/photo-1527406619566-0159590b8540?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80" alt="Thumbnail" className="card-img-top" />
                                <div className="card-body">
                                    <p className="post-component-3point5-image-caption">Lassi</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="https://images.unsplash.com/photo-1643268972535-a2b100ff3632?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80" alt="Thumbnail" className="card-img-top" />
                                <div className="card-body">
                                    <p className="post-component-3point5-image-caption">Masala Dosa</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="https://images.unsplash.com/photo-1552912470-ee2e96439539?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2542&q=80" alt="Thumbnail" className="card-img-top" />
                                <div className="card-body">
                                    <p className="post-component-4-image-caption">Chinatown Vendor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostComponent3