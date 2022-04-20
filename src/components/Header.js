import React from 'react';

const Header = ({ isLoggedIn, logout }) => {
  return (
    <header>
      <h1>Mycophilia</h1>
      {isLoggedIn && <button onClick={e => logout(e)}>LOG OUT</button>}
    </header>
  )
}

export default Header;