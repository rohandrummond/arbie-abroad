import React from 'react';
import { NavLink } from 'react-router-dom';
import NavAuth from './NavAuth';
import NavDropdown from './NavDropdown';

function Nav() {
    return (
        <>
            <nav className='flex row ctr nav-ctr'>
                <NavDropdown />
                <NavLink 
                    className={({ isActive }) => isActive ? 'body-txt active' : 'body-txt'}
                    to='/' 
                >
                    Home
                </NavLink>
                <NavLink 
                    className={({ isActive }) => isActive ? 'body-txt active' : 'body-txt'}
                    to='/places' 
                >
                    Places
                </NavLink>
                <NavLink 
                    className={({ isActive }) => isActive ? 'body-txt active' : 'body-txt'}
                    to='/about' 
                >
                    About
                </NavLink>
                <NavAuth />
            </nav>
        </>
    );
}

export default Nav;
