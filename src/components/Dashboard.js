import React from 'react';

const Dashboard = ({ user }) => {
  const sightings = user.sightings;
  console.log(sightings);
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

      </section>
    </div>
  )
}

export default Dashboard;