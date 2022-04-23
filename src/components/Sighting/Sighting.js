import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchFungus, deleteSighting } from '../../apiCalls';
import { formatDate } from '../../utils';
import './Sightings.scss';

const Sighting = ({ id, fungusId, date, location, notes, retrieveSightings }) => {
  const [fungusName, setFungusName] = useState('');
  const [fungusImage, setFungusImage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    getFungus(fungusId);
  })

  const getFungus = fungusId => {
    fetchFungus(fungusId)
      .then(data => {
        setFungusName(data.name);
        setFungusImage(data.imageUrl);
      })
      .catch(err => setFungusName('Unavailable'))
  }

  const deleteRecord = id => {
    deleteSighting(id)
      .then(() => {
        setError(null);
        retrieveSightings();
      })
      .catch(err => setError('Unable to delete this item. Please try again later.'))
  }

  const formattedDate = formatDate(date);

  return (
    <div className='sighting-card'>
      <img src={fungusImage} alt=''/>
      <h3>{fungusName}</h3>
      <div className='date-line'>
        <h4>Date:</h4>
        <p>{formattedDate}</p>
      </div>
      <div className='location-line'>
        <h4>Location:</h4>
        <p>{location}</p>
      </div>
      <div className='notes-container'>
        <p><span className='pseudo-heading'>Notes:</span> {notes ? notes : 'N/A'}</p>
      </div>
      {error && <p>{error}</p>}
      <button onClick={() => deleteRecord(id)}>DELETE</button>
    </div>
  )
}

export default Sighting;

Sighting.propTypes = {
  id: PropTypes.number.isRequired,
  fungusId: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  retrieveSightings: PropTypes.func.isRequired
}