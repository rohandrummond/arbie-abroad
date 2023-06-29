import React from 'react'

function Footer() {
    return (
        <footer className="bg-dark">
            <ul className="nav justify-content-center">
                <li className="nav-item"><a href="#" className="nav-link text-light">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link text-light">About</a></li>
                <li className="nav-item"><a href="#" className="nav-link text-light">Countries</a></li>
                <li className="nav-item"><a href="#" className="nav-link text-light">Posts</a></li>
            </ul>
            <p className="text-center text-light">&copy; arbie 2023</p>
        </footer>
    );
}

export default Footer