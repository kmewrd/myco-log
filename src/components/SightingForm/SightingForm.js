import { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { postSighting } from '../../apiCalls';
import './SightingForm.scss';

const SightingForm = ({ userId, fungusId }) => {
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
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
          setSuccessMsg('Sighting successfully recorded!');
        })
        .catch(err => setError('Something went wrong. Please try again later.'))
    } else {
      setError('Please complete all fields.' );
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
    <section className='sighting-form-wrapper'>
      <form className='sighting-form'>
      <button className='close-form-button' type='button' onClick={history.goBack} aria-label='Close form'>X</button>
        <h2>Record Sighting</h2>
        <div className='sighting-inputs-container'>
          <label htmlFor='date'>Date:</label>
          <input type='date' name='date' id='date' value={date} onChange={e => setDate(e.target.value)} required />
          <label htmlFor='location'>Location:</label>
          <input type='text' name='location' id='location' value={location} onChange={e => setLocation(e.target.value)} required />
          <label htmlFor='notes'>Notes:</label>
          <textarea type='textarea' name='notes' id='notes' value={notes} onChange={e => setNotes(e.target.value)} required></textarea>
        </div>
        {error && <p>{error}</p>}
        {successMsg && <p>{successMsg}</p>}
        <button className='submit-button' onClick={e => submitSighting(e)}>SUBMIT</button>
      </form>
    </section>
  )
}

export default SightingForm;

SightingForm.propTypes = {
  userId: PropTypes.number.isRequired,
  fungusId: PropTypes.string.isRequired
}