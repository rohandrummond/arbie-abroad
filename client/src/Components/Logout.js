import React from 'react'

function Logout() {
    async function handleLogout() {
        try {
            await fetch('/api/logout', { method: 'POST' });
            window.location.href = '/';
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div>
            <form className="d-flex" onSubmit={handleLogout}>
                <button className="btn btn-danger">Logout</button>
            </form>
        </div>
    )
}

export default Logout