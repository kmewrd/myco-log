import { Component } from 'react';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import Dashboard from './components/Dashboard/Dashboard';
import { fetchUser, fetchSightings, fetchRegionalFungi } from './apiCalls';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      user: null,
      sightings: [],
      regionalFungi: [],
      error: null
    }
  }

  completeLogin = username => {
    this.initializeData(username);
  }

  logout = e => {
    e.preventDefault();
    this.setState({ isLoggedIn: false, user: null, sightings: [], regionalFungi: [] });
  }

  initializeData = username => {
    Promise.all([fetchUser(username), fetchSightings()])
      .then(data => {
        const userId = username.split('mycophile').join('');
        const userSightings = data[1].filter(sighting => sighting.userId.toString() === userId);

        fetchRegionalFungi(data[0].region)
          .then(data => this.setState({ regionalFungi: data }))
          .catch(err => console.log(err))
        
        this.setState({ user: data[0], sightings: userSightings, isLoggedIn: true })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Header isLoggedIn={this.state.isLoggedIn} logout={this.logout} />
        <main>
          <Switch>
            <Route exact path='/dashboard'>
              {this.state.isLoggedIn ? <Dashboard user={this.state.user} sightings={this.state.sightings} /> : <Redirect to='/' />}
            </Route>
            <Route exact path='/'>
              {!this.state.isLoggedIn ? <LoginForm completeLogin={this.completeLogin} /> : <Redirect to='/dashboard' />}
            </Route>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;