import React from 'react';
import { Link } from 'react-router-dom';
import './ListItem.css';

const ListItem = ({ id, name, scientificName, imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt='' />
      <h3>{name}</h3>
      <h4>{scientificName}</h4>
      <Link to={`/explore/${id}`}>
        <button>View</button>
      </Link>
    </div>
  )
}

export default ListItem;