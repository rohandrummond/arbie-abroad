import { Link } from 'react-router-dom'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'

function About() {
  return (
    <>
      <div className="flex column full-vp">
        <Nav></Nav>
        <div className="flex row centered about-ctr">
          <h1 className="large-hd about-hd">kia ora,</h1>
          <div className="flex column">
            <div className="body-txt about-pg-ctr">
              <p>
                Rohan and Britt here. We've taken a career break to travel, and
                this website was built so we had a place to store our travel
                memories and share it with family and friends.
              </p>
              <p>
                Arbie Abroad also doubles as a project for Rohan’s web
                development portfolio. It’s built using React.js for the
                frontend, Node.js for the backend, and MongoDB for storage. View
                the code and a more detailed breakdown of the technologies used
                in{' '}
                <a
                  className="link"
                  href="https://github.com/rohandrummond/arbie-abroad"
                  target="_blank"
                  rel="noreferrer"
                >
                  this
                </a>{' '}
                Github repo.
              </p>
            </div>
            <Link className="btn about-btn" to="/places">
              View more
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default About
