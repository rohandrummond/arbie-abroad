import React, { useEffect, useState } from 'react'
import PostsCard from './PostsCard';
import './PostsAlbum.css'

function CountryPostsAlbum(props) {

    const [postsData, setPostsData] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch(`/api/posts/${props.countryName}`);
                const data = await response.json();
                setPostsData(data);
            } catch (e) {
                console.error('Error fetching JSON data:', e);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div className="recent-posts">
            <div className="album">
                <div className="container">
                    <div className="recent-posts-container row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {postsData.map((post) => (
                            <PostsCard
                                title={post.title}
                                image={post.image}
                                link={post.link}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default CountryPostsAlbum