import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Header.scss'

const Header = ({ isLoggedIn, logout }) => {
  return (
    <header>
      <NavLink to='/' style={{ color: '#fff', textDecoration: 'none'}}>
        <h1 className='logotype'>Mycophilia</h1>
      </NavLink>
      {isLoggedIn && <button onClick={e => logout(e)}>LOG OUT</button>}
    </header>
  )
}

export default Header;

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}