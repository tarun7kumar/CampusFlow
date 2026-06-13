import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">CampusFlow</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Dashboard</Link>
        <Link to="/emails">Emails</Link>
        <Link to="/assistant">Assistant</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  )
}

export default Navbar
