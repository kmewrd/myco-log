import { useState } from 'react';
import PropTypes from 'prop-types';
import './LoginForm.scss';

const LoginForm = ({ completeLogin, isLoading }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const validateLogin = e => {
    e.preventDefault();

    if (username === 'mycophile5044' && password === 'fungi') {
      completeLogin(username);
      clearForm();
    } else if (!username || !password) {
      setError('Please fill in both fields.');
    } else {
      setError('Invalid username or password. Please try again.');
    }
  }

  const clearForm = () => {
    setUsername('');
    setPassword('');
    setError('');
  }

  return (
    <div className='login-form-wrapper'>
      <form className='login-form'>
        <h2>Welcome!</h2>
        <h3>Please sign in.</h3>
        <div className='login-inputs-container'>
          <input name='username' type='text' placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} required />
          <input name='password' type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        {isLoading && <p className='error-message'>Success! Please wait while your info is retrieved...</p>}
        {error && <p>{error}</p>}
        <button onClick={e => validateLogin(e)}>SIGN IN</button>
      </form>
    </div>
  )
}

export default LoginForm;

LoginForm.propTypes = {
  completeLogin: PropTypes.func.isRequired
}