import React from 'react'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">arbie abroad</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Countries</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Posts</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <a className="btn btn-outline-light" href="/login">Login</a>
                            <a className="btn btn-primary" href="/register">Register</a>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header