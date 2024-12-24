import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deAuthenticate } from '../redux/authenticator'

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
                <a className='body-text' onClick={handleLogout} href='/login'>Logout</a> :
                <a className='body-text' href='/login'>Account</a> 
            }
        </>
    )
}

export default NavAuth