import React from 'react'
import './LoginAndRegister.css'

function LoginAndRegister() {

    return (
        <div>
            <form className="d-flex">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="/login">Login/Register</a>
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default LoginAndRegister