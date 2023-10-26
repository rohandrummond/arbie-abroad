import React from 'react'
import HeaderAuthenticate from './HeaderAuthenticate';
import './Header.css'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">arbie abroad</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span><i
                            className="fa-solid fa-bars"
                            style={{
                                color: "#453A2F"
                            }}></i></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <form>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/countries">Countries</a>
                                </li>
                                <HeaderAuthenticate />
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header