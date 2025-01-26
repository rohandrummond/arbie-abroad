import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { authenticate } from '../redux/authenticator'

function AuthForm(props) {

    const dispatch = useDispatch();
    
    const navigate = useNavigate();

    // Capture whether user is on Login or Signup page
    const path = window.location.pathname;
    const endpoint = path === '/register' ? '/users' : path;

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
        fetch(`/api${endpoint}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        })
            .then(response => response.json())
            .then((response) => {
                if (response.status === 'success') {
                    console.log(response)
                    dispatch(authenticate(response.userInfo));
                    navigate('/');
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
            <div className='flex centered auth-otr-ctr'>
                <div className='flex column auth-inr-ctr'>
                    <h1 className='small-hd form-hd'>{props.heading}</h1>
                    <form className='auth-frm' method='post' onSubmit={handleAuthentication}>
                        {
                            (path === '/register') && 
                            <div className='flex row centered auth-2-col-ctr'>
                                <div className='flex column form-inpt-grp auth-2-col'>
                                    <label className='body-txt form-inpt-labl'>First name</label>
                                    <input 
                                        className='form-inpt body-txt'
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
                                <div className='flex column form-inpt-grp auth-2-col'>
                                    <label className='body-txt form-inpt-labl'>Last name</label>
                                    <input 
                                        className='form-inpt body-txt'
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
                        <div className='flex column form-inpt-grp'>
                            <label className='body-txt form-inpt-labl'>Email</label>
                            <input
                                className='form-inpt body-txt'
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
                                <p className='sub-txt form-err'>{authenticationError.error}</p> 
                                : null
                            }
                        </div>
                        <div className='flex column form-inpt-grp'>
                            <label className='body-txt form-inpt-labl'>Password</label>
                            <input
                                className='form-inpt body-txt'
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
                                <p className='sub-txt form-err'>{authenticationError.error}</p> 
                                : null
                            }
                        </div>
                        <button type='submit' className="btn auth-btn">{props.button}</button>
                        {
                            (path === '/login') && <div className='sub-txt'>
                                <p>Don't have an account? Sign up <a className='link' href='/register'>here</a></p>
                            </div>
                        }
                    </form>
                </div>
            </div>
        </>
    );
}

export default AuthForm