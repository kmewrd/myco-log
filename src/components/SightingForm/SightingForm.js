import { Component } from 'react';
import './SightingForm.css';

class SightingForm extends Component {
  constructor() {
    super();
    this.state = {
      date: '',
      location: '',
      notes: ''
    }
  }

  render() {
    return (
      <form>
        <button>Close</button>
        <input type='text' name='date' value={this.state.date} />
        <input type='text' name='location' value={this.state.location} />
        <input type='text' name='notes' value={this.state.notes} />
        <button>SUBMIT</button>
      </form>
    )
  }
}

export default SightingForm;