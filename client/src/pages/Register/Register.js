import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Nav from '../../components/Nav/Nav'

import Footer from '../../components/Footer/Footer'
import AuthForm from '../../components/AuthForm/AuthForm'

function Register() {
  const { authenticated } = useSelector((state) => state.authenticator)
  if (authenticated) {
    return <Navigate to="/" replace />
  }
  return (
    <>
      <div className="flex column full-vp">
        <Nav></Nav>
        <AuthForm heading="Create an account" button="Register" />
      </div>
      <Footer></Footer>
    </>
  )
}

export default Register
