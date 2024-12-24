import React from 'react'
import { useSelector } from 'react-redux'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function NavDropdown() {

    const { authenticated, userInfo } = useSelector((state) => state.authenticator)
    if (authenticated && userInfo?.type === 'admin') {
        return (
        <>
            <div className="nav-dropdown">
            <button className="flex row nav-dropdown-button body-font-small">
                Admin <ArrowDropDownIcon></ArrowDropDownIcon>
            </button>
            <div className="flex column nav-dropdown-content">
                <a className='body-font-small' href='/manage-posts'>Posts</a>
                <a className='body-font-small' href='/users'>Users</a>
            </div>
            </div>
        </>
    )}
}

export default NavDropdown
