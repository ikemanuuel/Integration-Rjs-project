import React, { useState } from 'react';
import './login.css';
//import { Switch } from "react-router-dom";

export const Login = (props) => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [error1, setError1] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // check email and password, set error messages if invalid
    if (!email || email === '') {
      setMsg('');
      setError('Please input an email');
      return;
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email) === false) {
      setMsg('');
      setError('Must input correct Email.');
      return;
    } else {
      setError('');
    }

    if (!pass || pass === '') {
      setMsg('');
      setError1('Please input a password');
      return;
    }
    const passvalid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (passvalid.test(pass) === false) {
      setMsg('');
      setError1('Password must have at least 8 characters length, one Uppercase letter, one lowercase letter, one digit, and one special character.');
      return;
    } else {
      setError1('');
    }

    if (email==="user@example.com" && pass==="testpassword") {
        console.log('Logged in successfully!');
        setMsg('Login Successful!');
      }
    
  };

  return (
    <div className="auth-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <br />
        {error && <p className="error-message">{error}</p>}
        {error1 && <p className="error-message">{error1}</p>}
        {msg === 'Login Successful!' && <p className="success-message">{msg}</p>}
        {msg === 'Invalid Input' && <p className="error-message">{msg}</p>}
        <button type="submit">Log In</button>
        <button onClick={() => props.onFormSwitch('register')}>
          Don't have an account? Register here.
        </button>
        <button onClick={() => props.onFormSwitch('forgotpass')}>Forgot Password?</button>
      </form>
    </div>
  );
};

export default Login;
