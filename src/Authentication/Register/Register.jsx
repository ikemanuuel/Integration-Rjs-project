import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import './register.css'

const updateErrorFN = (errorfirstname, stateUpdater) => {
  stateUpdater(errorfirstname);
};
const updateErrorLN = (errorlastname, stateUpdater) => {
  stateUpdater(errorlastname);
};
const updateErrorEM = (erroremail, stateUpdater) => {
  stateUpdater(erroremail);
};
const updateErrorUN = (errorusername, stateUpdater) => {
  stateUpdater(errorusername);
};
const updateErrorPW = (errorpassword, stateUpdater) => {
  stateUpdater(errorpassword);
};

const Register = () => {
    const navigate = useNavigate();

    const isValidEmail = (value) => {
      const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      return regx.test(value);
    };
    
    const isPasswordValid = (value) => {
      const regx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
      return regx.test(value);
    };

    const [full, setFull] = useState('');
    const [data, setData] = useState({
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      password: "",});

      const {
        first_name,
        last_name,
        username,
        email,
        password,
      } = data;
    
    

    const [errorfirstname, setErrorfirstname] = useState('');
    const [errorlastname, setErrorlastname] = useState('');
    const [erroremail, setErroremail] = useState('');
    const [errorusername, setErrorusername] = useState('');
    const [errorpassword, setErrorpassword] = useState('');

    const [msg, setMsg] = useState('');


    const formValidation = () =>{
      if (!first_name.trim() || first_name.length < 3){
        return updateErrorFN("Invalid name!", setErrorfirstname);
  }
   if (!last_name.trim() || last_name.length < 3){
    return updateErrorLN("Invalid name!", setErrorlastname);
  
  }
   if (!isValidEmail(email)){
        return updateErrorEM("Invalid name!", setErroremail);
  }
   if (!username.trim() || username.length < 3){
        return updateErrorUN("Invalid username!", setErrorusername);
  }
   if (!isPasswordValid(password)){
          return updateErrorPW("Invalid Password must contain: Atleast one digit and special character, 8 to 16 characters!", setErrorpassword);  
  }
    }
   const submit = () => {
    if (formValidation()) {
      if (first_name.trim() || first_name.length > 3) {
        setErrorfirstname("");
      }
      if (last_name.trim() || last_name.length > 3) {
        setErrorlastname("");
      }
  
      if (username.trim() || username.length >= 11) {
        setErrorusername("");
      }
      if (formValidation(email)) {
        setErroremail("");
      }
      if (isPasswordValid(password)){
        setErrorpassword("");
        
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
            placeholder='first name'
            value={first_name}
            onChange={(event) => {
              setData({ ...data, first_name: event.target.value });
            }}
        />
          <text className='em'>First Name</text>
        {errorfirstname ? <p className='msgcolor errorposition'>{errorfirstname}</p> : null}

        <input 
            type = "text"
            className = 'regfull' 
            placeholder='last name'
            value={last_name}
            onChange={(event) => {
              setData({ ...data, last_name: event.target.value });
            }}
        />
          <text className='em'>Last Name</text>
        <p className='msgcolor errorposition'>{errorlastname}</p>


        <input 
            type = "email"
            className = 'regemail' 
            placeholder='youremail@gmail.com'
            value={email}
            onChange={(event) => {
              setData({ ...data, email: event.target.value });
            }}
        />  
           <text className='em'>Email</text>
         <p className='msgcolor errorposition'>{erroremail}</p>

        <input 
            type = "text"
            className = 'reguser' 
            placeholder='user name'
            value={username}
            onChange={(event) => {
              setData({ ...data, username: event.target.value });
            }}
        />
          <text className='em'>Username</text>
        <p className='msgcolor error1position'>{errorusername}</p>

        <input 
            type = "password"
            className = 'regpass' 
            placeholder='******'
            value={password}
            onChange={(event) => {
              setData({ ...data, password: event.target.value });
            }}
        />
          <text className='em'>Password</text>
          <p className='msgcolor error1position'>{errorpassword}</p>



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
