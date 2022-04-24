import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Sighting from '../Sighting/Sighting';
import NavBar from '../NavBar/NavBar';
import { fetchData } from '../../apiCalls';
import { formatRegions, getSightingsThisMonth } from '../../utils';
import './Dashboard.scss';

const Dashboard = ({ user, sightings, getSightings }) => {
  useEffect(() => {
    retrieveSightings();
  }, [])

  const retrieveSightings = () => {
    fetchData()
      .then(data => {
        const userSightings = data.filter(sighting => sighting.userId === user.id);

        getSightings(userSightings);
      })
      .catch(err => console.log(err))
  }

  const sightingsThisMonth = getSightingsThisMonth(sightings);
  
  const allSightings = sightings.map(sighting => <Sighting key={sighting.id} id={sighting.id} fungusId={sighting.fungusId} date={sighting.date} location={sighting.location} notes={sighting.notes} retrieveSightings={retrieveSightings} />);

  const region = formatRegions([user.region]);

  return (
    <div className='dashboard-wrapper'>
      <NavBar />
      <section className='dashboard'>
        <div className='dashboard-stats-container'>
          <h2>Dashboard</h2>
          <div className='dashboard-stats'>
            <div className='region'>
              <h3>Region:</h3>
              <p>{region}</p>
            </div>
            <div className='total-sightings'>
              <h3>Total sightings:</h3>
              <p>{sightings.length}</p>
            </div>
            <div className='monthly-sightings'>
              <h3>Sightings this month:</h3>
              <p>{sightingsThisMonth.length}</p>
            </div>
          </div>
        </div>
        <div className='my-sightings'>
          <h2>My Sightings</h2>
          <div className='sightings-container'>
            {allSightings}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard;

Dashboard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    region: PropTypes.string
  }).isRequired,
  sightings: PropTypes.array.isRequired,
  getSightings: PropTypes.func.isRequired
}