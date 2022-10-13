import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';

const NavBar = () => {
    return (
        <div className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/users'>Users</Link>
        </div>
    )
}

export default NavBar