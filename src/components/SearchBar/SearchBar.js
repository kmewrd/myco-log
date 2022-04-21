import { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchField: ''
    }
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    return (
      <form>
        <input type='text' placeholder='Search...' value={this.state.searchField} onChange={e => this.handleChange(e)} />
        <button>GO</button>
      </form>
    )
  }
}

export default SearchBar;