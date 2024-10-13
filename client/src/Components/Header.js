import React from 'react'
import NavAuth from './NavAuth';
import NavDropdown from './NavDropdown';

function Header() {
    return (
        <>
        <header className='flex row nav-container'>
            <a href='./'>
                <div className='nav-logo'>arbie abroad</div>
            </a>
            <nav className='nav-menu'>
                <NavDropdown></NavDropdown>
                <a className='body-font-small' href='/about'>About</a>
                <a className='body-font-small' href='/posts'>Posts</a>
                <NavAuth></NavAuth>
            </nav>
        </header>
        </>
    );
}

export default Header