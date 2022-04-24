import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
  return (
    <div className='not-found'>
      <h2>404</h2>
      <p>That page was not found! Please return to <Link to='/'>home</Link>.</p>
    </div>
  )
}

export default NotFound;