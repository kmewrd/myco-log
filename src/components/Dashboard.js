import React, { useEffect } from 'react';
import Sighting from './Sighting';

const Dashboard = ({ user, sightings, getSightings }) => {
  const mySightings = sightings.map(sighting => <Sighting key={sighting.id} id={sighting.id} date={sighting.date} location={sighting.location} notes={sighting.notes}/>)

  useEffect(() => {
    getSightings();
  }, [])

  return (
    <div>
      <section>
        <h2>Dashboard</h2>
        <div>
          <h3>Region: {user.region}</h3>
          <h3>Total sightings: </h3>
          <h3>Sightings this month: </h3>
        </div>
      </section>
      <section>
        <h2>My Sightings</h2>
        {mySightings}
      </section>
    </div>
  )
}

export default Dashboard;