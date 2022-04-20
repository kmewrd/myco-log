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
    this.getUser(username);
  }

  logout = e => {
    e.preventDefault();
    this.setState({ isLoggedIn: false, user: null });
  }

  getUser = username => {
    fetchUser(username)
      .then(data => this.setState({ user: data, isLoggedIn: true }))
      .catch(err => console.log(err))
  }

  getSightings = () => {
    fetchSightings()
      .then(data => {
        const mySightings = data.filter(sighting => sighting.userId === this.state.user.id);
        this.setState({ sightings: mySightings });
      })
      .catch(err => this.setState({ error: 'Something went wrong.' }))
  }

  render() {
    return (
      <div>
        <Header isLoggedIn={this.state.isLoggedIn} logout={this.logout} />
        <main>
          {!this.state.isLoggedIn && <LoginForm completeLogin={this.completeLogin} />}
          {this.state.isLoggedIn && <Dashboard user={this.state.user} sightings={this.state.sightings} getSightings={this.getSightings} />}
        </main>
      </div>
    );
  }
}

export default App;
