import { Component } from 'react';
import Header from './components/Header';
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
      </div>
    );
  }
}

export default App;
