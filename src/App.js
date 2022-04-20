import { Component } from 'react';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    }
  }

  completeLogin = () => {
    this.setState({ isLoggedIn: true });
  }

  render() {
    return (
      <div>
        <Header isLoggedIn={this.state.isLoggedIn} />
        {!this.state.isLoggedIn && <LoginForm completeLogin={this.completeLogin} />}
      </div>
    );
  }
}

export default App;
