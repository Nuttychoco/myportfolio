import React from 'react';
import './navbar.css';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    
    <nav className="navbar">
      <img src={logo} alt="" className='logo' />
      <div className="desktopMenu">
      <Link className='desktopMenuListItem' >Project</Link>
      <Link className='desktopMenuListItem' >Experience</Link>
      <Link className='desktopMenuListItem' >Contact</Link>
      </div>
      <div>
        <FontAwesomeIcon className='icons' icon={faFacebook} />
        <FontAwesomeIcon className='icons' icon={faInstagram} />
      </div>
    </nav>
  )
}

export default Navbar