import React from 'react';
import Sighting from './Sighting';

const Dashboard = ({ user }) => {
  const sightings = user.sightings.map(sighting => <Sighting key={sighting.id} id={sighting.id} date={sighting.date} notes={sighting.notes}/>)

  return (
    <div>
      <section>
        <h2>Dashboard</h2>
        <div>
          <h3>Region: </h3>
          <h3>Total sightings: </h3>
          <h3>Sightings this month: </h3>
        </div>
      </section>
      <section>
        <h2>My Sightings</h2>
        {sightings}
      </section>
    </div>
  )
}

export default Dashboard;