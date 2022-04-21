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

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitSighting = e => {
    e.preventDefault();

    if (this.state.date && this.state.location && this.state.notes) {
      let sighting = {
        id: Date.now(),
        fungusId: parseInt(this.props.id),
        userId: this.props.user.id,
        date: this.state.date,
        location: this.state.location,
        notes: this.state.notes
      }
      console.log(sighting);
    }
  }

  clearForm = () => {
    this.setState({ date: '', location: '', notes: '' });
  }

  render() {
    return (
      <form>
        <button>Close</button>
        <input type='text' name='date' value={this.state.date} onChange={e => this.handleChange(e)} />
        <input type='text' name='location' value={this.state.location} onChange={e => this.handleChange(e)} />
        <input type='text' name='notes' value={this.state.notes} onChange={e => this.handleChange(e)} />
        <button onClick={e => this.submitSighting(e)}>SUBMIT</button>
      </form>
    )
  }
}

export default SightingForm;