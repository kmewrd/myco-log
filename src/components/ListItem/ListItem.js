import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ListItem.scss';

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

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string
}