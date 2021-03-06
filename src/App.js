import { useState } from 'react';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import Dashboard from './components/Dashboard/Dashboard';
import ExplorePage from './components/ExplorePage/ExplorePage';
import DetailPage from './components/DetailPage/DetailPage';
import SightingForm from './components/SightingForm/SightingForm';
import NotFound from './components/NotFound/NotFound';
import { fetchData, fetchRegionalFungi } from './apiCalls';
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
    fetchData(username)
      .then(data => {
        setUser(data);
        toggleIsLoggedIn(true);
        toggleIsLoading(false);
        setError(null);
      })
      .catch(err => {
        toggleIsLoading(false);
        setError('Unable to retrieve user data. Please try again later.');
      })
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
      .catch(err => {
        toggleIsLoading(false);
        setError('Unable to retrieve regional fungi information. Please try again later.');
      })
  }

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} logout={logout} />
      <main>
        {error && <div className='error-message top-bar'><p>{error}</p></div>}
        {!isLoggedIn && (<img className='background-image' src='https://images.unsplash.com/photo-1543904856-8257e34283d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2592&q=80' alt='Three small, light-colored mushrooms with long stems cling to a patch of damp bark.' />)}
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
          }} />
          <Route path='/*'>
            <NotFound />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;