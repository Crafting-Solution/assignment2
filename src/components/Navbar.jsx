import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const Navbar = () => {
  return (
    <nav>
        <div className="navBar">
            <Link className="logo">
                <img src={logo} alt="" />
                <span>AUGUSTUS</span>
            </Link>
            {/* Navigation Links */}
            <div className="nav-links">
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/projects'}>Projects</Link>
                <Link to={'/services'}>Services</Link>
                <Link to={'/contact'}>Contact</Link>
            </div>
        </div>
        <hr />
    </nav>
  )
}

export default Navbar