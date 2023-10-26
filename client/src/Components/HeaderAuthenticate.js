import React, { useEffect, useState } from 'react'
import HeaderLogout from './HeaderLogout';
import HeaderLoginAndSignup from './HeaderLoginAndSignup';

function HeaderAuthenticate() {

    // Check whether user is logged in
    const [loggedIn, setLoggedIn] = useState([]);
    useEffect(() => {
        async function fetchLoginStatus() {
            try {
                const response = await fetch('/api/session');
                const data = await response.json();
                setLoggedIn(data);
            } catch (e) {
                console.error('Error fetching JSON data:', e);
            }
        };
        fetchLoginStatus();
    }, []);

    return (
        <div>
            {loggedIn.status ? (
                <HeaderLogout />
            ) : (
                <HeaderLoginAndSignup />
            )}
        </div>
    )
}

export default HeaderAuthenticate