import { Component } from 'react';

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
      this.props.getUserInfo(this.state.username);
      this.props.completeLogin();
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
      <form>
        <h2>Welcome!</h2>
        <h3>Please sign in.</h3>
        <input name='username' type='text' placeholder='Username' onChange={e => this.handleChange(e)} />
        <input name='password' type='password' placeholder='Password' onChange={e => this.handleChange(e)} />
        {this.state.error && <p>{this.state.error}</p>}
        <button onClick={e => this.validateLogin(e)}>SIGN IN</button>
      </form>
    )
  }
}

export default LoginForm;