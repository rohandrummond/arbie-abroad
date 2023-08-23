import React from 'react'

function Logout() {
    async function handleLogout() {
        try {
            await fetch('/api/logout', { method: 'POST' });
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div>
            <a className="nav-link" onClick={handleLogout} href="/">Logout</a>
        </div>
    )
}

export default Logout