import { Component } from 'react';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import { fetchUser } from './apiCalls';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      user: null
    }
  }

  completeLogin = () => {
    this.setState({ isLoggedIn: true });
  }

  getUserInfo = username => {
    fetchUser(username).then(data => this.setState({ user: data }))
  }

  render() {
    return (
      <div>
        <Header isLoggedIn={this.state.isLoggedIn} />
        <main>
          {!this.state.isLoggedIn && <LoginForm completeLogin={this.completeLogin} getUserInfo={this.getUserInfo} />}
          {this.state.isLoggedIn && <Dashboard user={this.state.user}/>}
        </main>
      </div>
    );
  }
}

export default App;
