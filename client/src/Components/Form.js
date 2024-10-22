import React, { useState } from 'react'

function Form(props) {

    // Capture whether user is on Login or Signup page
    const path = window.location.pathname;

    // Create useState hook to capture user details and control form inputs
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    // Create useState hook to capture authentication error if necessary
    const [authenticationError, setAuthenticationError] = useState({
        field: '',
        error: ''
    })

    // Send Login or Signup call
    function handleAuthentication(e) {
        e.preventDefault();
        setAuthenticationError({ field: '', error: '' });
        const userDetails = {
            'firstName': user.firstName,
            'lastName': user.lastName,
            'email': user.email,
            'password': user.password,
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
                if (response.status === 'success') {
                    window.location.href = '/'
                } else if (response.code === '300') {
                    setAuthenticationError({
                        field: 'password',
                        error: 'Incorrect password.'
                    })
                } else if (response.code === '400') {
                    setAuthenticationError({
                        field: 'email',
                        error: "We can't find that account."
                    })
                } else if (response.code === '200') {
                    setAuthenticationError({
                        field: 'email',
                        error: 'That email has already been registered.'
                    })
                }
            })
    }

    return (
        <>
            <div className='flex centered form-background-container'>
                <div className='flex column form-container'>
                    <h1 className='form-title'>{props.heading}</h1>
                    <form className='form' method='post' onSubmit={handleAuthentication}>
                        {
                            (path === '/register') && 
                            <div className='flex row form-double-input-container'>
                                <div className='flex column form-input-group form-double-input-group'>
                                    <label className='body-font-small form-input-label'>First name</label>
                                    <input 
                                        className='form-input body-font-small'
                                        id='fist-name'
                                        name='first-name'
                                        type='text'
                                        placeholder='Ronald'
                                        required
                                        value={user.firstName}
                                        onChange={e => setUser(prevState => ({
                                            ...prevState,
                                            firstName: e.target.value
                                    }))} />
                                </div>
                                <div className='flex column form-input-group form-double-input-group'>
                                    <label className='body-font-small form-input-label'>Last name</label>
                                    <input 
                                        className='form-input body-font-small'
                                        id='last-name'
                                        name='last-name'
                                        type='text'
                                        placeholder='McDonald'
                                        required
                                        value={user.lastName}
                                        onChange={e => setUser(prevState => ({
                                            ...prevState,
                                            lastName: e.target.value
                                    }))} />
                                </div>
                            </div>
                        }
                     
                        <div className='flex column form-input-group'>
                            <label className='body-font-small form-input-label'>Email</label>
                            <input
                                className='form-input body-font-small'
                                id='email'
                                name='email'
                                type='text'                              
                                placeholder='ronaldmcdonald@hotmail.com'
                                required
                                value={user.email}
                                onChange={e => setUser(prevState => ({
                                    ...prevState,
                                    email: e.target.value
                            }))} />
                            { 
                                authenticationError.field === 'email' ? 
                                <p className='form-error-message'>{authenticationError.error}</p> 
                                : null
                            }
                        </div>
                        <div className='flex column form-input-group'>
                            <label className='body-font-small form-input-label'>Password</label>
                            <input
                                className='form-input body-font-small'
                                type='password'
                                id='password'
                                placeholder='abc123 (pls)'
                                name='password'
                                required
                                value={user.password}
                                onChange={e => setUser(prevState => ({
                                    ...prevState,
                                    password: e.target.value
                            }))} />
                            { 
                                authenticationError.field === 'password' ? 
                                <p className='form-error-message'>{authenticationError.error}</p> 
                                : null
                            }
                        </div>
                        <button type='submit' className="button-3d form-button">{props.button}</button>
                        {
                            (path === '/login') && <div className='container w-50 text-center'>
                                <p className='signup-prompt'>Don't have an account? Sign up <a className='linked-text' href='/register'>here</a></p>
                            </div>
                        }
                    </form>
                </div>
            </div>
        </>
    );
}

export default Form