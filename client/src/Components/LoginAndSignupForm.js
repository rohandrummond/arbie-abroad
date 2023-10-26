import React, { useState } from 'react'
import './LoginAndSignupForm.css'

function LoginAndSignupForm(props) {

    // Capture whether user is on Login or Signup page
    const path = window.location.pathname;

    // Create useState hook to capture user details and control form inputs
    const [contact, setContact] = useState({
        username: "",
        password: ""
    });

    // Create useState hook to capture authentication error if necessary
    const [authenticationError, setAuthenticationError] = useState({
        field: "",
        error: ""
    })

    // Send Login or Signup call
    function handleLoginAndRegisterSubmit(e) {
        e.preventDefault();
        const userDetails = {
            "name": contact.username,
            "password": contact.password,
        }
        fetch(`/api${path}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        })
            // Check response from API and either redirect or display error
            .then(response => response.json())
            .then((response) => {
                if (response.status === "success") {
                    window.location.href = "/"
                } else if (response.message === "incorrect password") {
                    setAuthenticationError({
                        field: "password",
                        error: "Incorrect password 🥲"
                    })
                } else if (response.message === "username not found") {
                    setAuthenticationError({
                        field: "username",
                        error: "User not found 🥲"
                    })
                } else if (response.message === "user already exists") {
                    setAuthenticationError({
                        field: "username",
                        error: "User already exists 🥲"
                    })
                }
            })
    }

    return (
        <div className="container w-50 login-and-signup-form-container">
            <h1>{props.instructions}</h1>
            <form className="login-and-signup-form" method="post" onSubmit={handleLoginAndRegisterSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Ronald McDonald"
                        name="name"
                        value={contact.username}
                        onChange={e => setContact(prevState => ({
                            ...prevState,
                            username: e.target.value
                        }))} />
                    <p className="authentication-error-message">{authenticationError.field === "username" ? authenticationError.error : ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Your password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        name="password"
                        value={contact.password}
                        onChange={e => setContact(prevState => ({
                            ...prevState,
                            password: e.target.value
                        }))} />
                    <p className="authentication-error-message">{authenticationError.field === "password" ? authenticationError.error : ""}</p>

                </div>
                <div className="login-and-signup-button-container">
                    <button className="btn" type="submit">{props.button}</button>
                </div>
                {
                    (path === '/login') && <div className="container w-50 text-center">
                        <p className="signup-prompt">Don't have an account? Sign up <a href="/signup">here</a></p>
                    </div>
                }
            </form>
        </div>
    );
}

export default LoginAndSignupForm