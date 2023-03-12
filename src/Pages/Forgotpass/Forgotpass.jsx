import React, { useState } from 'react';
import './forgot.css'

export const ForgotPass = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Code to handle forgot password submission, such as sending an email with reset link
    console.log('Forgot password submitted for email:', email);
  }

  return (
    <div className="auth-forgot">
      <form className="forgot-form" onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>
        <label htmlFor="email"></label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your email@gmail.com" id="email" name="email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ForgotPass;
