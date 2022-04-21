import { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: null
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  validateLogin = e => {
    e.preventDefault();

    if (this.state.username === 'mycophile5044' && this.state.password === 'fungi') {
      this.props.completeLogin(this.state.username);
      this.clearForm();
    } else if (!this.state.username || !this.state.password) {
      this.setState({ error: 'Please fill in both fields.' })
    } else {
      this.setState({ error: 'Invalid username or password. Please try again.' })
    }
  }

  clearForm = () => {
    this.setState({ username: '', password: '', error: null });
  }

  render() {
    return (
      <div className='login-form-wrapper'>
        <img className='background-image' src='https://images.unsplash.com/photo-1543904856-8257e34283d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2592&q=80' />
        <form className='login-form'>
          <h2>Welcome!</h2>
          <h3>Please sign in.</h3>
          <input name='username' type='text' placeholder='Username' value={this.state.username} onChange={e => this.handleChange(e)} />
          <input name='password' type='password' placeholder='Password' value={this.state.password} onChange={e => this.handleChange(e)} />
          {this.state.error && <p>{this.state.error}</p>}
          <button onClick={e => this.validateLogin(e)}>SIGN IN</button>
        </form>
      </div>
    )
  }
}

export default LoginForm;