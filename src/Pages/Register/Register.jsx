import React, { useState } from 'react';
import './register.css';

export const Register = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, username, password);
        // Add your logic to submit form data here
    }

    return (
        <div className="auth-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <h2>Register</h2>
                <label htmlFor="name">Full Name</label>
                <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" required />

                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="youremail@example.com" required />

                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="johndoe" required />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="********" required />

                <button type="submit">Register</button>

                <button className="link-btnn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
            </form>
        </div>
    );
};

export default Register;
