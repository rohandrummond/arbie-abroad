import React, { useEffect, useState } from 'react'
import PostsCard from './PostsCard';
import './PostsAlbum.css'


function RecentPostsAlbum() {

    return (
        <div className="recent-posts">
            <div className="album">
                <div className="container">
                    <h2 className="recent-posts-heading">recent posts</h2>
                    <p className="recent-posts-seemore-p"><a className="recent-posts-seemore-a" href="/countries">see all →</a></p>
                    <div className="recent-posts-cards row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <PostsCard
                            title="Kuala Lumpur"
                            body="Malaysia"
                            image="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2328&q=80"
                        />
                        <PostsCard
                            title="Malacca"
                            body="Malaysia"
                            image="https://images.unsplash.com/photo-1587252337395-d02401a8a814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80"
                        />
                        <PostsCard
                            title="Little India & Chinatown"
                            body="Singapore"
                            image="https://images.unsplash.com/photo-1536163713675-42cf53cbd4f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                        />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default RecentPostsAlbum