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
  
  return (
    <section>
      <img src={fungus.imageUrl} />
      <Link to='/explore'>
        <button>Back</button>
      </Link>
      <h2>{fungus.name}</h2>
      <h3>{fungus.scientificName}</h3>
      <p>{fungus.description}</p>
      <button>Record Sighting</button>
    </section>
  )
}

export default DetailPage;