import React, { useState, useEffect } from 'react';
import { fetchFungus } from '../../apiCalls';
import { Link } from 'react-router-dom';
import './DetailPage.css';

const DetailPage = ({ id }) =>{
  const [fungus, setFungus] = useState({});

  useEffect(() => {
    getFungus();
  })

  const getFungus = () => {
    fetchFungus(id).then(data => setFungus(data)).catch(err => console.log(err));
  }

  let regions;

  if (fungus.regions) {
    regions = fungus.regions.map(region => <div key={region}>{region}</div>)
  }
  
  return (
    <section>
      <img src={fungus.imageUrl} />
      <Link to='/explore'>
        <button>Back</button>
      </Link>
      <h2>{fungus.name}</h2>
      <h3>{fungus.scientificName}</h3>
      <p>{fungus.description}</p>
      {regions}
      <Link to={`/explore/${id}/record-sighting`}>
        <button>Record Sighting</button>
      </Link>
    </section>
  )
}

export default DetailPage;