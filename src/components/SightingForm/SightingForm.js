import { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { postSighting } from '../../apiCalls';
import './SightingForm.css';

const SightingForm = ({ userId, fungusId }) => {
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();

  const clearForm = () => {
    setDate('');
    setLocation('');
    setNotes('');
    setError(null);
  }

  const submitSighting = e => {
    e.preventDefault();

    if (date && location && notes) {
      let sighting = createSighting();

      postSighting(sighting)
        .then(() => {
          clearForm();
        })
        .catch(err => setError('Something went wrong. Please try again later.'))
    } else {
      setError('Please complete all required fields.' );
    }
  }

  const createSighting = () => {
    return {
      id: Date.now(),
      fungusId: parseInt(fungusId),
      userId: userId,
      date: date,
      location: location,
      notes: notes
    }
  }

  return (
    <form>
      <button type='button' onClick={history.goBack}>Close</button>
      <label htmlFor='date'>Date:</label>
      <input type='text' name='date' id='date' value={date} onChange={e => setDate(e.target.value)} />
      <label htmlFor='location'>Location:</label>
      <input type='text' name='location' id='location' value={location} onChange={e => setLocation(e.target.value)} />
      <label htmlFor='notes'>Notes:</label>
      <input type='text' name='notes' id='notes'value={notes} onChange={e => setNotes(e.target.value)} />
      {error && <p>{error}</p>}
      <button onClick={e => submitSighting(e)}>SUBMIT</button>
    </form>
  )
}

export default SightingForm;

SightingForm.propTypes = {
  userId: PropTypes.number.isRequired,
  fungusId: PropTypes.string.isRequired
}