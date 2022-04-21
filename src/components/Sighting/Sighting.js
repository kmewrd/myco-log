import React from 'react';
import { deleteSighting } from '../../apiCalls';
import './Sightings.css';

const Sighting = ({ id, date, location, notes }) => {
  // need methods that will find fungus by id
  // to populate fungus names below
  // perhaps additional fetch request(s)

  let formattedDate = new Date(date);
  formattedDate = formattedDate.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const deleteRecord = id => {
    deleteSighting(id)
      .then(() => console.log('success'))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <h3>Fungus Name Here</h3>
      <h4>Date: {formattedDate}</h4>
      <h4>Location: {location}</h4>
      <p>Notes: {notes}</p>
      <button onClick={() => deleteRecord(id)}>DELETE</button>
    </div>
  )
}

export default Sighting;