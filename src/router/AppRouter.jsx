import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import NoMatch from '../components/NoMatch';
import User from '../components/User';
import Users from '../components/Users';


const AppRouter = () => {
    const usersList = [
        {
            id: 1,
            name: 'Santiago'
        },
        {
            id: 2,
            name: 'Mateo'
        },
        {
            id: 3,
            name: 'David'
        }];
    return (
        <BrowserRouter>
            <NavBar />
            <h1>Hola estoy en App Router</h1>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/users' element={<Users users={usersList} />}>
                        <Route path=':userName' element={<User/>}/>
                    </Route>
                </Route>
                <Route path='*' element={<NoMatch />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter