import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deAuthenticate } from '../../redux/authenticator'

function NavAuth(props) {
  const { authenticated } = useSelector((state) => state.authenticator)
  const dispatch = useDispatch()
  async function handleLogout() {
    try {
      if (props.isMobile) {
        props.closeMobileMenu()
      }
      dispatch(deAuthenticate())
    } catch (e) {
      console.error('Error logging out user: ', e)
    }
  }
  return (
    <>
      {authenticated ? (
        <Link
          className={props.isMobile ? 'mbl-nav-txt' : 'body-txt'}
          onClick={handleLogout}
          to="/"
        >
          Logout
        </Link>
      ) : (
        <Link
          className={props.isMobile ? 'mbl-nav-txt' : 'body-txt'}
          to="/login"
        >
          Account
        </Link>
      )}
    </>
  )
}

export default NavAuth
