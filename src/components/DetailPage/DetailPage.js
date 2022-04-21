import React, { useState, useEffect } from 'react';
import { fetchFungus } from '../../apiCalls';
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
      <h2>{fungus.name}</h2>
    </section>
  )
}

export default DetailPage;