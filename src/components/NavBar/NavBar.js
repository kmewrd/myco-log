import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to='/explore'>
        <button>Explore</button>
      </Link>
      <Link to='/dashboard'>
        <button>Dashboard</button>
      </Link>
    </nav>
  )
}

export default NavBar;