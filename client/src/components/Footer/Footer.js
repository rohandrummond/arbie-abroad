import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className="flex row ctr footer-ctr">
        <div className="flex row footer-link-ctr">
          <Link
            className="body-text"
            to="https://github.com/rohandrummond/arbie-abroad"
            target="_blank"
          >
            GitHub
          </Link>
          <Link
            className="body-text"
            to="https://www.linkedin.com/in/drummondr/"
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link
            className="body-text"
            to="mailto:drummond.rohan@gmail.com"
            target="_blank"
          >
            Email
          </Link>
        </div>
        <p className="body-text">Rohan Drummond® 2025</p>
      </footer>
    </>
  )
}

export default Footer
