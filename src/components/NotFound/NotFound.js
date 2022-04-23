import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div>
      <h2>404</h2>
      <p>That page was not found! Please return to <Link to='/'>home</Link>.</p>
    </div>
  )
}

export default NotFound;