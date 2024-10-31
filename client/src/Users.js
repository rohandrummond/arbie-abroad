import React, { useEffect, useState, useRef } from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from "./components/Header";
import Modal from './components/Modal';

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

    const modalRef = useRef();
    const [modalState, setModalState] = useState({});

    const { authenticated, userInfo } = useSelector((state) => state.authenticator);
    if (!authenticated || userInfo.type === 'admin') {
        return (
            <Navigate to='/forbidden' replace />
        )
    }

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
                                                src={item.type !== 'admin' ? 'delete.svg' : 'delete-bin-disabled.svg' }
                                                className={item.type !== 'admin' ? 'table-action-icon shrink': '.table-action-icon'}
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
            <Modal ref={modalRef} modalInfo={modalState}></Modal>
        </>
    )

}

export default Users