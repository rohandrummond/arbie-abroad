import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { deAuthenticate } from '../redux/authenticator'

function NavAuth() {
    const { authenticated } = useSelector((state) => state.authenticator);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    async function handleLogout() {
        try {
            navigate('/');
            dispatch(deAuthenticate());
        } catch(e) {
            console.error('Error logging out user: ', e)
        }
    }
    return (
        <>
            {
                authenticated ? 
                <a className='body-txt' onClick={handleLogout}>Logout</a> :
                <a className='body-txt' href='/login'>Account</a> 
            }
        </>
    )
}

export default NavAuth