import { Component } from 'react';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import { fetchUser, fetchSightings } from './apiCalls';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      user: null,
      sightings: [],
      error: null
    }
  }

  completeLogin = username => {
    this.initializeData(username);
  }

  logout = e => {
    e.preventDefault();
    this.setState({ isLoggedIn: false, user: null, sightings: [] });
  }

  initializeData = username => {
    Promise.all([fetchUser(username), fetchSightings()])
      .then(data => {
        const userId = username.split('mycophile').join('');
        const userSightings = data[1].filter(sighting => sighting.userId.toString() === userId);
        
        this.setState({ user: data[0], sightings: userSightings, isLoggedIn: true })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Header isLoggedIn={this.state.isLoggedIn} logout={this.logout} />
        <main>
          {!this.state.isLoggedIn && <LoginForm completeLogin={this.completeLogin} />}
          {this.state.isLoggedIn && <Dashboard user={this.state.user} sightings={this.state.sightings} />}
        </main>
      </div>
    );
  }
}

export default App;
