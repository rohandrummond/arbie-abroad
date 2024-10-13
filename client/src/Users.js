import React, { useEffect, useState } from "react";
import Header from "./Components/Header";



function Users() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch('/api/fetchUsers');
                const data = await response.json();
                setUsers(data)
            } catch (e) {
                console.log("Error fetching users:" + e);
            }
        };
        fetchUsers();
    }, []);

    async function handleDelete(e) {
        const userEmail = {
            email: e.target.id
        }
        fetch(`/api/deleteUser`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userEmail)
        })
            .then(response => response.json())
            .then((response) => {
                if (response.acknowledged === true && response.deletedCount === 1) {
                    // Initiate popup
                    setUsers(prevUsers => prevUsers.filter(user => user.email !== userEmail.email));
                } else {
                    // Handle error
                }
            })
    }

    return (
        <>
        <Header></Header>
        <div className='flex column centered users-container'>
            <h1 className='users-heading'>Manage users</h1>
            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item) =>
                            <tr key={item._id}>
                                <td>{item.email}</td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td className='users-delete-cell'>
                                    <img 
                                        src={item.type !== 'admin' ? 'delete-bin.svg' : 'delete-bin-disabled.svg' }
                                        alt='A brown rubbish bin icon'
                                        className={item.type !== 'admin' ? '.table-action-icon users-delete-icon': '.table-action-icon'}
                                        id={item.email} 
                                        onClick={item.type !== 'admin' ? handleDelete : undefined}
                                    />
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        </>
    )

}

export default Users