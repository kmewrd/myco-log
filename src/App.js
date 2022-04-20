import { Component } from 'react';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
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
        {!this.state.isLoggedIn && <LoginForm completeLogin={this.completeLogin} getUserInfo={this.getUserInfo} />}
      </div>
    );
  }
}

export default App;
