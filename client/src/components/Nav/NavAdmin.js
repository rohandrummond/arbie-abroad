import React from 'react'
import { useSelector } from 'react-redux'

function NavAdmin() {

    const { authenticated, userInfo } = useSelector((state) => state.authenticator)
    if (authenticated && userInfo?.type === 'admin') {
        return (
        <>
            <div className='desktop-only nav-admin'>
                <div className='flex row body-txt nav-admin-lnk'>Admin, </div>
                <div className='flex column nav-admin-menu'>
                    <a className='body-txt' href='/manage-posts'>Posts</a>
                    <a className='body-txt' href='/users'>Users</a>
                </div>
            </div>
        </>
    )}
}

export default NavAdmin
