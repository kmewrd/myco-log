import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  return (
    <nav className='main-nav'>
      <NavLink to='/dashboard' className={isActive => 'nav-link' + (isActive ? ' selected' : '')}>
        Dashboard
      </NavLink>
      <NavLink to='/explore' className={isActive => 'nav-link' + (isActive ? ' selected' : '')}>
        Explore
      </NavLink>
    </nav>
  )
}

export default NavBar;