import { Component } from 'react';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true
    }
  }

  render() {
    return (
      <div>
        <Header isLoggedIn={this.state.isLoggedIn} />
        <LoginForm />
      </div>
    );
  }
}

export default App;
