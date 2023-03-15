import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import './register.css'

const Register = () => {
    const navigate = useNavigate();

    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passvalid = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9-]{7,}$/;

    const [full, setFull] = useState('');
    const [email, setEmail] = useState('');
    const [usern, setUsern] = useState('');
    const [pass, setPass] = useState('');

    

    const [errorfull, setErrorfull] = useState('');
    const [erroremail, setErroremail] = useState('');
    const [erroruser, setErroruser] = useState('');
    const [errorpass, setErrorpass] = useState('');

    const [msg, setMsg] = useState('');



    const checkFull = (e) => {
      setFull(e.target.value);

      if(full === false){
        setMsg('')
        setErrorfull('Must input correct Email ');
        return
      }else{
        setErrorfull('');
        setMsg('')
        return true;
      }
    }

    const checkEmail = (e) => {
      setEmail(e.target.value);

      if(regex.test(email) === false){
        setMsg('')
        setErroremail('Must input correct Email ');
        return
      }else{
        setErroremail('');
        return true;
      }
    }


    const checkUsern = (e) => {
      setUsern(e.target.value);

      if(full === false){
        setMsg('')
        return
      }else{
        setErroruser('');
        setMsg('')
        return true;
      }
    }


    const checkPass = (e) =>{
    setPass(e.target.value);

    if(passvalid.test(pass) === false){
      setMsg('')
      setErrorpass('Must input 8 characters length and have an Uppercase and Lowercase Letters');
      return
    }else{
      setErrorpass('');
      return true;
    }
  }


   const submit = () => {
    if (full === '' && pass === '' && usern === '' && pass === ''){
       setErrorfull('Please Input a Name')
      setErroremail('Please Input an Email')
      setErroruser('Please Input a User Name')
      setErrorpass('Please Input an Password')


    }else{
      if (full === false || passvalid.test(pass) === false || usern === false || regex.test(email) === false){
        setErrorfull('')
        setErroremail('')
        setErroruser('')
        setErrorpass('')
        setMsg('Invalid Input')
      }else{
        // console.log('yooowsadgshjasgdhghas')
        navigate('/')
      }
  }
}


  return (
    <div className='regcontainer'>
      <div className='regform'>
        <text className='regtxt'>Registration</text>

        <input 
            type = "text"
            className = 'regfull' 
            placeholder='full name'
            onChange={checkFull}
        />
        <p className='msgcolor errorposition'>{errorfull}</p>


        <input 
            type = "email"
            className = 'regemail' 
            placeholder='youremail@gmail.com'
            onChange={checkEmail}
        />
         <p className='msgcolor errorposition'>{erroremail}</p>

        <input 
            type = "text"
            className = 'reguser' 
            placeholder='user name'
            onChange={checkUsern}
        />
        <p className='msgcolor error1position'>{erroruser}</p>

        <input 
            type = "password"
            className = 'regpass' 
            placeholder='******'
            onChange={checkPass}
        />
          <p className='msgcolor error1position'>{errorpass}</p>



        <text className='dyhaa'>Do you have an account??</text>

        {/* kung sa register mag link2 ka buhata lang ni */}
        {/* <Link to = '/' className = 'log'> Login </Link> */}
        <Link to = '/' className='reg'>login</Link>


        <button className='btn' type='button' onClick={submit}>
                <text className='txt'>
                  Submit
                </text>
            </button>
            <p className='msgcolor msgposition'>{msg}</p>

      </div>
    </div>
  )
}

export default Register