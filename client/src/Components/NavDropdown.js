import React, { useEffect, useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function NavDropdown() {

    // Check user type
    const [userType, setUserType] = useState([]);
    useEffect(() => {
        async function fetchUserType() {
            try {
                const response = await fetch('/api/session')
                const data = await response.json();
                setUserType(data.userType);
            } catch (e) {
                console.error('Error fetching JSON data:', e);
            }
        };
        fetchUserType();
    }, []);

    if (userType === 'admin') {
        return (
        <>
            <div className="nav-dropdown">
            <button className="flex row nav-dropdown-button body-font-small">
                Admin <ArrowDropDownIcon></ArrowDropDownIcon>
            </button>
            <div className="flex column nav-dropdown-content">
                <a className='body-font-small' href="">Posts</a>
                <a className='body-font-small' href='/users'>Users</a>
            </div>
            </div>
        </>
    )}
}

export default NavDropdown
