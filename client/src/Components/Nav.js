import React from 'react'
import NavAuth from './NavAuth';
import NavDropdown from './NavDropdown';

function Nav() {
    return (
        <>
            <nav className='flex row ctr nav'>
                <NavDropdown></NavDropdown>
                <a className='body-text' href='/places'>Places, </a>
                <a className='body-text' href='/about'>About,</a>
                <NavAuth></NavAuth>
            </nav>
        </>
    );
}

export default Nav