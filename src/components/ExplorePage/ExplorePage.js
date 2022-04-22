import { useState, useEffect } from 'react';
import ListItem from '../ListItem/ListItem';
import SearchBar from '../SearchBar/SearchBar';
import NavBar from '../NavBar/NavBar';
import './ExplorePage.css';

const ExplorePage = ({ regionalFungi, getFungi, region }) => {
  const [filter, setFilter] = useState(null);

  let filteredFungi;

  if (filter) {
    filteredFungi = regionalFungi.filter(fungus => {
      return fungus.characteristics.includes(filter) || fungus.name.includes(filter);
    })
  } else {
    filteredFungi = regionalFungi;
  }

  const fungi = filteredFungi.map(fungus => {
    return (
      <ListItem
        key={fungus.id}
        id={fungus.id}
        name={fungus.name}
        scientificName={fungus.scientificName}
        imageUrl={fungus.imageUrl}
      />
    )
  })

  useEffect(() => {
    getFungi(region);
  }, [])

  const search = searchTerms => {
    setFilter(searchTerms);
  }

  return (
    <section>
      <NavBar />
      <h2>Fungus Finder</h2>
      <SearchBar search={search}/>
      {filter && !filteredFungi.length && (
        <div>
          <button onClick={() => setFilter(null)}>Clear Search</button>
          <p>No results found for {filter}</p>
        </div>
      )}
      {filter && !!filteredFungi.length && (
        <div>
          <button onClick={() => setFilter(null)}>Clear Search</button>
          <p>Showing results for {filter}</p>
        </div>
      )}
      <div>
        {fungi}
      </div>
    </section>
  )
}

export default ExplorePage;