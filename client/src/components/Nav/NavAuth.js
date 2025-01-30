import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, } from 'react-router-dom';
import { deAuthenticate } from '../../redux/authenticator'

function NavAuth() {
    const { authenticated } = useSelector((state) => state.authenticator);
    const dispatch = useDispatch();
    async function handleLogout() {
        try {
            dispatch(deAuthenticate());
        } catch(e) {
            console.error('Error logging out user: ', e)
        }
    }
    return (
        <>
            {
                authenticated ?
                <Link className='body-txt' onClick={handleLogout} to='/'>Logout</Link> :
                <Link className='body-txt' to='/login'>Account</Link>
            }
        </>
    )
}

export default NavAuth