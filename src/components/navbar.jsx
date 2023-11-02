import React from 'react';
import './navbar.css';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
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
        <FontAwesomeIcon className='icons' icon={faGithub} />
        <FontAwesomeIcon className='icons' icon={faPhone} />
      </div>
    </nav>
  )
}

export default Navbar