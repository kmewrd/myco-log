import { useState, useEffect } from 'react';
import { fetchFungus, deleteSighting } from '../../apiCalls';
import './Sightings.css';

const Sighting = ({ id, fungusId, date, location, notes }) => {
  const [fungusName, setFungusName] = useState('');

  useEffect(() => {
    getFungus(fungusId);
  })

  const getFungus = fungusId => {
    fetchFungus(fungusId)
      .then(data => setFungusName(data.name))
      .catch(err => setFungusName('Unavailable'))
  }

  let formattedDate = new Date(date);
  formattedDate = formattedDate.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const deleteRecord = id => {
    deleteSighting(id)
      .then(() => console.log('success'))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <h3>{fungusName}</h3>
      <h4>Date: {formattedDate}</h4>
      <h4>Location: {location}</h4>
      <p>Notes: {notes}</p>
      <button onClick={() => deleteRecord(id)}>DELETE</button>
    </div>
  )
}

export default Sighting;