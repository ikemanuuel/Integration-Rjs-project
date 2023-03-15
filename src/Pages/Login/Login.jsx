import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import './login.css'



const Login = () => {
    const navigate = useNavigate();

    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passvalid = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9-]{7,}$/;

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const [error, setError] = useState('');
  const [error1, setError1] = useState('');

  const [msg, setMsg] = useState('');
  
  // danhi kay sa Email Input dapit inig tuplok
  const checkEmail = (e) => {
    setEmail(e.target.value);

    if(regex.test(email) === false){
      setMsg('')
      setError('Must input correct Email ');
      return
    }else{
      setError('');
      return true;
    }
  }

   // danhi kay sa Password Input dapit inig tuplok
  const checkPass = (e) =>{
    setPass(e.target.value);

    if(passvalid.test(pass) === false){
      setMsg('')
      setError1('Must input 8 characters length and have an Uppercase and Lowercase Letters');
      return
    }else{
      setError1('');
      return true;
    }
  }
      // dinhi dapit kay sa pag submit nimo mag validate siya 
  const submit = () => {
    if (email === '' && pass === ''){
      setError('Please Input an Email')
      setError1('Please Input an Password')

    }else{
      if (passvalid.test(pass) === false || regex.test(email) === false){
        setError('')
        setError1('')
        setMsg('Invalid Input')
      }else{
      navigate('dash')
      }
  }
}
    
  return (
    <div className='container'>
        <div className='form'>
            <text className='logintxt'>Login</text>

            <input 
            type = "email"
            className = 'inputs' 
            placeholder='youremail@gmail.com'
            onChange={checkEmail}
            />
            <text className='em'>Email</text>
            <p className='msgcolor errorposition'>{error}</p>

            <input  
            type = "password" 
            className = 'input'
            placeholder='********'
            onChange={checkPass}
            />
            <text className='pas'>Password</text>
            <p className='msgcolor error1position'>{error1}</p>

            <text className='dyhaa'>Do you have an account??</text>

            {/* kung sa register mag link2 ka buhata lang ni */}
            {/* <Link to = '/' className = 'log'> Login </Link> */}
            <Link to = 'register' className='log'>Register</Link>

            <button className='btn' type='button' onClick={submit}>
                <text className='txt'>
                    Login
                </text>
            </button>
            <p className='msgcolor msgposition'>{msg}</p>
            
        </div>
    </div>
  )
}


export default Login