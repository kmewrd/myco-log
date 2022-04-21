import { Component } from 'react';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
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
          {/* <PageControl isLoggedIn={this.state.isLoggedIn} currentPage={this.state.currentPage} /> */}
          <Switch>
            <Route exact path='/'>
              {this.state.isLoggedIn ? <Redirect to='/dashboard' /> : <LoginForm completeLogin={this.completeLogin} />}
            </Route>
            <Route exact path='/dashboard'>
              {!this.state.isLoggedIn ? <Redirect to='/' /> : <Dashboard user={this.state.user} sightings={this.state.sightings} />}
            </Route>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
