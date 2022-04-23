import { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.scss';

const SearchBar = ({ search }) => {
  const [searchField, setSearchField] = useState('');

  return (
    <form>
      <input type='text' placeholder='Search...' value={searchField} onChange={e => setSearchField(e.target.value)} />
      <button type='button' onClick={() => {
        search(searchField)
        setSearchField('');
      }}>GO</button>
    </form>
  )
}

export default SearchBar;

SearchBar.propTypes = {
  search: PropTypes.func.isRequired
}