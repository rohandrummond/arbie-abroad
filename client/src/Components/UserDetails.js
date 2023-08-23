import React from 'react'
import './UserDetails.css'

function UserDetails(props) {
    const path = window.location.pathname;
    return (
        <div className="container w-50 userauthenticationbox">
            <h1>{props.instructions}</h1>
            <form class="userauthenticationform" action={props.route} method="post">
                <div className="form-group">
                    <label htmlFor="email">Your email address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" name="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Your password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" name="password" />
                </div>
                <div class="buttondiv">
                    <button className="btn" type="submit">{props.button}</button>
                </div>
                {
                    (path === '/login') && <div className="container w-50 text-center">
                        <p>Don't have an account? Sign up <a href="/signup">here</a></p>
                    </div>
                }
            </form>
        </div>
    );
}

export default UserDetails