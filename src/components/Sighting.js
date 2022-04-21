import React from 'react';

const Sighting = ({ date, location, notes }) => {
  // need methods that will find fungus by id
  // to populate fungus names below
  // perhaps additional fetch request(s)

  let formattedDate = new Date(date);
  formattedDate = formattedDate.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div>
      <h3>Fungus Name Here</h3>
      <h4>Date: {formattedDate}</h4>
      <h4>Location: {location}</h4>
      <p>Notes: {notes}</p>
    </div>
  )
}

export default Sighting;