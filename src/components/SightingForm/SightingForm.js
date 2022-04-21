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

  render() {
    return (
      <form>
        <button>Close</button>
        <input type='text' name='date' value={this.state.date} onChange={e => this.handleChange(e)} />
        <input type='text' name='location' value={this.state.location} onChange={e => this.handleChange(e)} />
        <input type='text' name='notes' value={this.state.notes} onChange={e => this.handleChange(e)} />
        <button>SUBMIT</button>
      </form>
    )
  }
}

export default SightingForm;