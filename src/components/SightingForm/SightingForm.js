import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SightingForm.css';

const SightingForm = ({ user, id }) => {
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
      let sighting = {
        id: Date.now(),
        fungusId: parseInt(id),
        userId: user.id,
        date: date,
        location: location,
        notes: notes
      }
      // POST request goes here
      console.log(sighting);
      clearForm();
    } else {
      setError('Please complete all required fields.' );
    }
  }

  return (
      <form>
        <button type='button' onClick={history.goBack}>Close</button>
        <input type='text' name='date' value={date} onChange={e => setDate(e.target.value)} />
        <input type='text' name='location' value={location} onChange={e => setLocation(e.target.value)} />
        <input type='text' name='notes' value={notes} onChange={e => setNotes(e.target.value)} />
        {error && <p>{error}</p>}
        <button onClick={e => submitSighting(e)}>SUBMIT</button>
      </form>
    )
}

export default SightingForm;