import React from 'react'

function LoginAndRegister() {

    return (
        <div>
            <form className="d-flex">
                <a className="btn btn-outline-light" href="/login">Login</a>
                <a className="btn btn-primary" href="/register">Register</a>
            </form>
        </div>
    )
}

export default LoginAndRegister