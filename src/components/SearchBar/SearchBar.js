import { useState } from 'react';

const SearchBar = () => {
  const [searchField, setSearchField] = useState('');

  return (
    <form>
      <input type='text' placeholder='Search...' value={searchField} onChange={e => setSearchField(e.target.value)} />
      <button>GO</button>
    </form>
    )
}

export default SearchBar;