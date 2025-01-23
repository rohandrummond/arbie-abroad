import React from 'react';
import { NavLink } from 'react-router-dom';
import NavAuth from './NavAuth';
import NavAdmin from './NavAdmin';

function Nav() {
    return (
        <>
            <nav className='flex row ctr nav-ctr'>
                <NavAdmin />
                <NavLink className='body-txt' to='/'>Home, </NavLink>
                <NavLink className='body-txt' to='/about'>About, </NavLink>
                <NavLink className='body-txt' to='/places'>Places, </NavLink>
                <NavAuth />
            </nav>
        </>
    );
}

export default Nav;
