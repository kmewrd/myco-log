import { useState } from 'react';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import Dashboard from './components/Dashboard/Dashboard';
import ExplorePage from './components/ExplorePage/ExplorePage';
import DetailPage from './components/DetailPage/DetailPage';
import SightingForm from './components/SightingForm/SightingForm';
import NotFound from './components/NotFound/NotFound';
import { fetchUser, fetchRegionalFungi } from './apiCalls';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';

const App = () => {
  const [isLoggedIn, toggleIsLoggedIn] = useState(false);
  const [isLoading, toggleIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [sightings, setSightings] = useState([]);
  const [regionalFungi, setRegionalFungi] = useState([]);
  const [error, setError] = useState(null);

  const completeLogin = username => {
    toggleIsLoading(true);
    initializeUser(username);
  }

  const logout = e => {
    e.preventDefault();
    toggleIsLoggedIn(false);
    setUser(null);
    setSightings([]);
    setRegionalFungi([]);
  }

  const initializeUser = username => {
    fetchUser(username)
      .then(data => {
        setUser(data);
        toggleIsLoggedIn(true);
        toggleIsLoading(false);
        setError(null);
      })
      .catch(err => setError('Unable to retrieve user data. Please try again later.'))
  }

  const getSightings = sightings => {
    setSightings(sightings);
  }

  const getFungi = region => {
    fetchRegionalFungi(region)
      .then(data => {
        setRegionalFungi(data);
        setError(null);
      })
      .catch(err => setError('Unable to retrieve regional fungi information. Please try again later.'))
  }

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} logout={logout} />
      <main>
        {error && <p>{error}</p>}
        <Switch>
          <Route exact path='/'>
            {!isLoggedIn ? <LoginForm completeLogin={completeLogin} isLoading={isLoading} /> : <Redirect to='/dashboard' />}
          </Route>
          <Route exact path='/dashboard'>
            {isLoggedIn ? <Dashboard user={user} sightings={sightings} getSightings={getSightings} /> : <Redirect to='/' />}
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
            <NotFound />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;