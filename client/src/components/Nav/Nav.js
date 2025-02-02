import React from 'react';
import NavAuth from './NavAuth';
import NavAdmin from './NavAdmin';
import { NavLink } from 'react-router-dom';
import hamburgerIcon from './hamburger-icon.svg'
import closeIcon from './close-icon.svg'

function Nav() {

    function openMobileMenu() {
        const mobileNavCtr = document.querySelector('.mbl-nav-ctr')
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

            {/* Mobile */}
            <nav className='flex row ctr mbl-nav-ctr'>
                <img 
                    className='mbl-nav-hmbrgr' 
                    src={hamburgerIcon}
                    alt='Hamburger menu'
                    onClick={openMobileMenu}
                ></img>
            </nav>
            <div className='flex column ctr full-vp mbl-nav-ovrly hide-mbl-nav-ovrly'>
                <img 
                    className='mbl-nav-cls' 
                    src={closeIcon}
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
