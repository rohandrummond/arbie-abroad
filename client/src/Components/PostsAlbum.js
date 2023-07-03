import React, { useEffect, useState } from 'react'
import PostsCard from './PostsCard';

function PostsAlbum() {

    const [postsData, setPostsData] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch('/api/posts');
                const data = await response.json();
                setPostsData(data);
            } catch (e) {
                console.error('Error fetching JSON data:', e);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div>
            <section className="text-center container">
                <div className="row">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1>Recent Posts</h1>
                    </div>
                </div>
            </section>
            <div className="album">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {postsData.map((post) => (
                            <PostsCard
                                title={post.title}
                                body={post.body}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default PostsAlbum