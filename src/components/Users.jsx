import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Users = ({ users }) => {
    return (
        <>
            <ul>
                {
                    users.map(user => (
                        <li key={user.id}><Link to={`/users/${user.name}`}>{user.name}</Link></li>
                    ))
                }
            </ul>
            <Outlet />
        </>
    )
}

export default Users