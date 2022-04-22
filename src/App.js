import { useState } from 'react';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import Dashboard from './components/Dashboard/Dashboard';
import ExplorePage from './components/ExplorePage/ExplorePage';
import DetailPage from './components/DetailPage/DetailPage';
import SightingForm from './components/SightingForm/SightingForm';
import { fetchUser, fetchSightings, fetchRegionalFungi } from './apiCalls';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

const App = () => {
  const [isLoggedIn, toggleIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [sightings, setSightings] = useState([]);
  const [regionalFungi, setRegionalFungi] = useState([]);
  const [error, setError] = useState(null);

  const completeLogin = username => {
    initializeData(username);
  }

  const logout = e => {
    e.preventDefault();
    toggleIsLoggedIn(false);
    setUser(null);
    setSightings([]);
    setRegionalFungi([]);
  }

  const initializeData = username => {
    Promise.all([fetchUser(username), fetchSightings()])
      .then(data => {
        const userId = username.split('mycophile').join('');
        const userSightings = data[1].filter(sighting => sighting.userId.toString() === userId);
        
        setUser(data[0]);
        setSightings(userSightings);
        toggleIsLoggedIn(true);
        setError(null);
      })
      .catch(err => setError('Unable to retrieve user data. Please try again later.'))
  }

  const getFungi = region => {
    fetchRegionalFungi(region)
      .then(data => setRegionalFungi(data))
      .catch(err => setError('Unable to retrieve regional fungi information. Please try again later.'))
  }

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} logout={logout} />
      <main>
        {error && <p>{error}</p>}
        <Switch>
          <Route exact path='/'>
            {!isLoggedIn ? <LoginForm completeLogin={completeLogin} /> : <Redirect to='/dashboard' />}
          </Route>
          <Route exact path='/dashboard'>
            {isLoggedIn ? <Dashboard user={user} sightings={sightings} /> : <Redirect to='/' />}
          </Route>
          <Route exact path='/explore'>
            {isLoggedIn ? <ExplorePage regionalFungi={regionalFungi} getFungi={getFungi} region={user.region}/> : <Redirect to='/' />}
          </Route>
          <Route exact path='/explore/:id' render={({ match }) => {
            return isLoggedIn ? <DetailPage id={match.params.id} /> : <Redirect to='/' />
          }} />
          <Route path='/explore/:id/record-sighting' render={({ match }) => {
            return isLoggedIn ? <SightingForm userId={user.id} fungusId={match.params.id} /> : <Redirect to='/' />
          }}>
          </Route>
          <Route path='/*'>
            {isLoggedIn ? <Dashboard user={user} sightings={sightings} /> : <Redirect to='/' />}
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;