import React from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/style.css';

const Layout = () => {
    return (
        <main className='main'>
            <Outlet />
        </main>
    )
}

export default Layout