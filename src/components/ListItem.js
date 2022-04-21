import React from 'react';

const ListItem = ({ id, name, scientificName, regions, description, characteristics, imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} />
      <h3>{name}</h3>
      <h4>{scientificName}</h4>
      <button>View</button>
    </div>
  )
}

export default ListItem;