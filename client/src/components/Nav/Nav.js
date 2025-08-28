import NavAuth from './NavAuth'
import NavAdmin from './NavAdmin'
import { NavLink } from 'react-router-dom'
import mobileNavLogo from './mobile-nav-logo.svg'
import hamburgerIcon from './hamburger-icon.svg'
import closeIcon from './close-icon.svg'

function Nav() {
  function openMobileMenu() {
    const mobileNavOverlay = document.querySelector('.mbl-nav-ovrly')
    mobileNavOverlay.classList.remove('hide-mbl-nav-ovrly')
    mobileNavOverlay.classList.add('show-mbl-nav-ovrly')
  }

  function closeMobileMenu() {
    const mobileNavOverlay = document.querySelector('.mbl-nav-ovrly')
    mobileNavOverlay.classList.add('hide-mbl-nav-ovrly')
    mobileNavOverlay.classList.remove('show-mbl-nav-ovrly')
  }

  return (
    <>
      {/* Desktop & Tablet */}
      <nav className="flex row ctr nav-ctr">
        <a href="/">
          <h1 class="nav-logo">arbie abroad</h1>
        </a>
        <div class="nav-menu-ctr">
          <NavAdmin />
          <NavLink className="body-txt" to="/">
            Home
          </NavLink>
          <NavLink className="body-txt" to="/about">
            About
          </NavLink>
          <NavLink className="body-txt" to="/places">
            Places
          </NavLink>
          <NavAuth />
        </div>
      </nav>

      {/* Mobile */}
      <nav className="flex row ctr mbl-nav-ctr">
        <a href="/">
          <img src={mobileNavLogo} alt="Arbie Abroad Logo" />
        </a>
        <img
          className="mbl-nav-hmbrgr"
          src={hamburgerIcon}
          alt="Hamburger menu"
          onClick={openMobileMenu}
        />
      </nav>
      <div className="flex column ctr full-vp mbl-nav-ovrly hide-mbl-nav-ovrly">
        <img
          className="mbl-nav-cls"
          src={closeIcon}
          alt="Close menu"
          onClick={closeMobileMenu}
        ></img>
        <div className="flex column mbl-nav-menu-ctr">
          <NavLink className="mbl-nav-txt" to="/">
            Home
          </NavLink>
          <NavLink className="mbl-nav-txt" to="/about">
            About
          </NavLink>
          <NavLink className="mbl-nav-txt" to="/places">
            Places
          </NavLink>
          <NavAuth isMobile={true} closeMobileMenu={closeMobileMenu} />
        </div>
      </div>
    </>
  )
}

export default Nav
