import { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.scss';

const SearchBar = ({ search }) => {
  const [searchField, setSearchField] = useState('');

  const submitSearch = e => {
    e.preventDefault();
    search(searchField)
    setSearchField('');
  }

  return (
    <form className='search-bar'>
      <input type='text' placeholder='Search...' value={searchField} onChange={e => setSearchField(e.target.value)} />
      <button className='search-button' type='submit' onClick={e => submitSearch(e)}>GO</button>
    </form>
  )
}

export default SearchBar;

SearchBar.propTypes = {
  search: PropTypes.func.isRequired
}