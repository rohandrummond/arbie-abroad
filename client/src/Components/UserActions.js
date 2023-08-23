import React, { useEffect, useState } from 'react'
import Logout from './Logout';
import LoginAndSignup from './LoginAndSignup';

function UserActions() {

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
                <Logout />
            ) : (
                <LoginAndSignup />
            )}
        </div>
    )
}

export default UserActions