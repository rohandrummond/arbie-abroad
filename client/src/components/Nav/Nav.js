import React from 'react';
import { NavLink } from 'react-router-dom';
import NavAuth from './NavAuth';
import NavAdmin from './NavAdmin';

function Nav() {

    function openMobileMenu() {
        const mobileNavOverlay = document.querySelector('.mbl-nav-ovrly');
        mobileNavOverlay.classList.remove('hide-mbl-nav-ovrly')
        mobileNavOverlay.classList.add('show-mbl-nav-ovrly')
    }
    
    function closeMobileMenu() {
        const mobileNavOverlay = document.querySelector('.mbl-nav-ovrly');
        mobileNavOverlay.classList.add('hide-mbl-nav-ovrly')
        mobileNavOverlay.classList.remove('show-mbl-nav-ovrly')
    }

    return (
        <>

            {/* Desktop & Tablet */}
            <nav className='flex row ctr nav-ctr'>
                <NavAdmin />
                <NavLink className='body-txt' to='/'>Home, </NavLink>
                <NavLink className='body-txt' to='/about'>About, </NavLink>
                <NavLink className='body-txt' to='/places'>Places, </NavLink>
                <NavAuth />
            </nav>
            <nav className='flex row ctr mbl-nav-ctr'>
                <img 
                    className='mbl-nav-hmbrgr' 
                    src='hamburger-menu.svg' 
                    alt='Hamburger menu'
                    onClick={openMobileMenu}
                ></img>
            </nav>

            {/* Mobile */}
            <div className='flex column ctr full-vp mbl-nav-ovrly hide-mbl-nav-ovrly'>
                <img 
                    className='mbl-nav-cls' 
                    src='close-icon.svg' 
                    alt='Close menu'
                    onClick={closeMobileMenu}
                ></img>
                <div className='flex column mbl-nav-menu-ctr'>
                    <NavLink className='mbl-nav-txt' to='/'>Home</NavLink>
                    <NavLink className='mbl-nav-txt' to='/about'>About</NavLink>
                    <NavLink className='mbl-nav-txt' to='/places'>Places</NavLink>
                    <NavAuth isMobile={true} closeMobileMenu={closeMobileMenu}/>
                </div>
            </div>

        </>
    );
}

export default Nav;
