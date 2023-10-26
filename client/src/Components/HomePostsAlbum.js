import React from 'react'
import PostsCard from './PostsCard';
import './PostsAlbum.css'
import './HomePostsAlbum.css'

function HomePostsAlbum() {

    return (
        <div className="post-album-container home-post-album-container album">
            <div className="container">
                <h2 className="post-album-heading">Recent posts</h2>
                <p className="recent-posts-see-more"><a className="recent-posts-see-more-link" href="/countries">see all →</a></p>
                <div className="post-album-cards row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <PostsCard
                        title="Yogyakarta"
                        body="Indonesia"
                        image="https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        link="posts/yogyakarta"
                    />
                    <PostsCard
                        title="North Sumatra"
                        body="Indonesia"
                        image="https://images.unsplash.com/photo-1654180537506-1825e51b7ce6?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        link="posts/northsumatra"
                    />
                    <PostsCard
                        title="Taman Negara"
                        body="Malaysia"
                        image="https://images.unsplash.com/photo-1657463190258-82a00a775dbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        link="posts/tamannegara"
                    />
                </div>
            </div>
        </div>
    );

}

export default HomePostsAlbum