import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='main-nav'>
      <NavLink to='/explore' className={isActive => 'nav-link' + (isActive ? 'selected' : '')}>
        Explore
      </NavLink>
      <NavLink to='/dashboard' className={isActive => 'nav-link' + (isActive ? 'selected' : '')}>
        Dashboard
      </NavLink>
    </nav>
  )
}

export default NavBar;