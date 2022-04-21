import React, { useState, useEffect } from 'react';
import Sighting from './Sighting';

const Dashboard = ({ user, sightings }) => {
  const [sightingsThisMonth, setSightingsThisMonth] = useState([]);
  
  const userSightings = sightings.map(sighting => <Sighting key={sighting.id} id={sighting.id} date={sighting.date} location={sighting.location} notes={sighting.notes}/>)

  useEffect(() => {
    getSightingsThisMonth();
  }, [])

  const getSightingsThisMonth = () => {
    let month = new Date();
    month = month.getMonth();
  
    let monthlySightings = sightings.filter(sighting => {
      let date = new Date(sighting.date);
      let sightingMonth = date.getMonth();
      return sightingMonth === month;
    });
  
    setSightingsThisMonth(monthlySightings);
  }

  return (
    <div>
      <section>
        <h2>Dashboard</h2>
        <div>
          <h3>Region: {user.region}</h3>
          <h3>Total sightings: {sightings.length}</h3>
          <h3>Sightings this month: {sightingsThisMonth.length}</h3>
        </div>
      </section>
      <section>
        <h2>My Sightings</h2>
        {userSightings}
      </section>
    </div>
  )
}

export default Dashboard;