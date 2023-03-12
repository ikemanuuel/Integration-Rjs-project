import React, { useState } from 'react';
import './register.css';

export const Register = (props) => {
    const [email, setEmail] = useState(''); 
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
   

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
        
        <form className="register-form" onSubmit={handleSubmit}>
            <h2>Register </h2>
            <label htmlFor="name"></label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            
            <label htmlFor="email"></label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            
            <label htmlFor="username"></label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="username" id="username" name="username" />
          
            <label htmlFor="password"></label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
           
            <button type="submit">Submit</button>
               
            <button className="link-btnn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>

        </form>
    </div>
    )
}
export default Register;
