import React from 'react';

const Header = ({ isLoggedIn }) => {
  return (
    <header>
      <h1>Mycophilia</h1>
      {isLoggedIn && <p>Menu Placeholder</p>}
    </header>
  )
}

export default Header;