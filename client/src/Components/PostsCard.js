import React from 'react'

function PostsCard(props) {
    return (
        <div className="col">
            <div className="card shadow-sm">
                <img src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" alt="Thumbnail" className="card-img-top" />
                <div className="card-body">
                    <h3 className="image-title">{props.title}</h3>
                    <p className="card-text">{props.body}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostsCard