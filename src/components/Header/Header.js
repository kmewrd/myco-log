import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss'

const Header = ({ isLoggedIn, logout }) => {
  return (
    <header>
      <h1>Mycophilia</h1>
      {isLoggedIn && <button onClick={e => logout(e)}>LOG OUT</button>}
    </header>
  )
}

export default Header;

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}