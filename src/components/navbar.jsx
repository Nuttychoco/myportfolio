import React from 'react';
import './navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
<img src={logo} alt="" className='logo'/>
<div className='desktopMenu'></div>

    </nav>
  )
}

export default Navbar