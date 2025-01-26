import React, { useEffect, useState, useRef } from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Nav from "./components/Nav";
import Modal from './components/Modal';

function Users() {
    
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch('/api/users');
                const data = await response.json();
                setUsers(data)
            } catch (e) {
                console.log("Error fetching users:" + e);
            }
        };
        fetchUsers();
    }, []);

    const modalRef = useRef();
    const [modalState, setModalState] = useState({});

    const { authenticated, userInfo } = useSelector((state) => state.authenticator);
    if (!authenticated || userInfo.type !== 'admin') {
        return (
            <Navigate to='/forbidden' replace />
        )
    }

    async function handleDelete(e) {
        const userEmail = {
            email: e.target.id
        }
        fetch(`/api/users`, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userEmail)
        })
            .then(response => response.json())
            .then((response) => {
                if (response.status === 'success') {
                    setModalState({
                        state: 'Success!',
                        message: 'User has been deleted.'
                    })
                    modalRef.current.showModal();
                    setUsers(prevUsers => prevUsers.filter(user => user.email !== userEmail.email));
                } else {
                    setModalState({
                        state: 'Error',
                        message: 'There was a problem deleting that user.'
                    })
                }
            })
    }

    return (
        <div className='flex column'>
            <Nav></Nav>
                <div className='flex row centered users-ctr'>
                    <div className='flex column centered'>
                        <h1 className='small-hd users-hd'>Manage users</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th className='body-txt'>Email</th>
                                    <th className='body-txt'>First Name</th>
                                    <th className='body-txt'>Last Name</th>
                                    <th className='body-txt'>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((item) =>
                                        <tr key={item._id}>
                                            <td className='body-txt'>{item.email}</td>
                                            <td className='body-txt'>{item.firstName}</td>
                                            <td className='body-txt'>{item.lastName}</td>
                                            <td className='body-txt'>
                                                <img 
                                                    src={item.type !== 'admin' ? 'delete.svg' : null }
                                                    alt={item.type !== 'admin' ? 'Delete user' : null }
                                                    className='table-dlt-icon'
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
                </div>
            <Modal ref={modalRef} modalInfo={modalState}></Modal>
        </div>
    )

}

export default Users