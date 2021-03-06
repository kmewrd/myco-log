import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchFungus } from '../../apiCalls';
import { formatRegions } from '../../utils';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './DetailPage.scss';

const DetailPage = ({ id }) =>{
  const [fungus, setFungus] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    getFungus();
  }, [])

  const getFungus = () => {
    fetchFungus(id)
      .then(data => {
        setFungus(data);
        setError(null);
      })
      .catch(err => setError('Unable to retrieve fungus details. Please try again later.'));
  }

  let regions;

  if (fungus.regions) {
    regions = formatRegions(fungus.regions);
    regions = regions.map(region => <div key={region} className='region'>{region}</div>)
  }
  
  return (
    <section className='detail-wrapper'>
      {error && (
        <div className='error-message'>
          <p>{error}</p>
          <Link to='/dashboard'>Return to home</Link>
        </div>
      )}
      <div className='detail-inner-wrapper'>
        <img src={fungus.imageUrl} alt='' />
        <div className='fungus-header'>
          <Link to='/explore'>
            <div aria-label='Back to previous page'>
              <FiArrowLeft color='F77F4F' size='2em' />
            </div>
          </Link>
          <div className='fungus-names'>
            <h2>{fungus.name}</h2>
            <h3>{fungus.scientificName}</h3>
          </div>
        </div>
        <div className='fungus-details'>
          <p>{fungus.description}</p>
          <div className='regions-wrapper'>
            {regions}
          </div>
          <Link to={`/explore/${id}/record-sighting`}>
            <button className='record-sighting-button'>RECORD SIGHTING</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default DetailPage;

DetailPage.propTypes = {
  id: PropTypes.string.isRequired
}