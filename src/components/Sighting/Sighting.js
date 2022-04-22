import { useState, useEffect } from 'react';
import { fetchFungus, deleteSighting } from '../../apiCalls';
import { formatDate } from '../../utils';
import './Sightings.css';

const Sighting = ({ id, fungusId, date, location, notes }) => {
  const [fungusName, setFungusName] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    getFungus(fungusId);
  })

  const getFungus = fungusId => {
    fetchFungus(fungusId)
      .then(data => setFungusName(data.name))
      .catch(err => setFungusName('Unavailable'))
  }

  const deleteRecord = id => {
    deleteSighting(id)
      .then(() => setError(null))
      .catch(err => setError('Unable to delete this item. Please try again later.'))
  }

  const formattedDate = formatDate(date);

  return (
    <div>
      <h3>{fungusName}</h3>
      <h4>Date: {formattedDate}</h4>
      <h4>Location: {location}</h4>
      <p>Notes: {notes}</p>
      {error & <p>{error}</p>}
      <button onClick={() => deleteRecord(id)}>DELETE</button>
    </div>
  )
}

export default Sighting;