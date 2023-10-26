import React, { useEffect, useState } from 'react'
import PostsCard from './PostsCard';
import './PostsAlbum.css'

function CountriesPostsAlbum(props) {

    // Fetch posts for country
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
    }, [props.countryName]);

    return (
        <div className="post-album-container album">
            <div className="container">
                <div className="post-album-cards row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {postsData.map((post) => (
                        <PostsCard
                            key={post._id}
                            title={post.title}
                            image={post.image}
                            link={post.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    );

}

export default CountriesPostsAlbum