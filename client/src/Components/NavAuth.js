import React, { useEffect, useState } from 'react'

function NavAuth() {

    // Check whether user is logged in
    const [loggedIn, setLoggedIn] = useState([]);
    useEffect(() => {
        async function fetchLoginStatus() {
            try {
                const response = await fetch('/api/session')
                const data = await response.json();
                setLoggedIn(data);
            } catch (e) {
                console.error('Error fetching JSON data:', e);
            }
        };
        fetchLoginStatus();
    }, []);

    async function handleLogout() {
        try {
            await fetch('/api/logout', { method: 'POST' })
                .then(response => response.json())
                .then((response) => {
                    if (response.status === 'success') {
                        setLoggedIn(null)
                        window.location.href = '/'
                    } else {
                        console.error('Error logging user out')
                    }
                })
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            {
                loggedIn.status ? 
                <a className="body-font-small" onClick={handleLogout} href="/">Logout</a> :
                <a className='body-font-small' href='/login'>Account</a> 
            }
        </>
    )
}

export default NavAuth