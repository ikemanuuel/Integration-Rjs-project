import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = data;

  const [error, setError] = useState("");

  const [msg] = useState("");

  const submit = () => {
    axios
      .post("http://localhost:8000/api/v1/accounts/token/login/", data, {})
      .then((response) => {
        setData("");
        setError("");
        navigate("/dash");
      })
      .catch((error) => {
        console.log(error);
        setError(
          "Invalid Credentials!\nor your account may not be activated\nplease check your email for activation"
        );
      });
  };

  return (
    <div className="logcontainer">
      <div className="form">
        <text className="logintxt">Login</text>
        <p className="msgcolor errorposition">{error}</p>
        <input
          type="email"
          className="inputs"
          placeholder="username"
          value={username}
          onChange={(event) => {
            setData({ ...data, username: event.target.value });
          }}
        />
        <text className="em">Username</text>

        <input
          type="password"
          className="input"
          placeholder="********"
          value={password}
          onChange={(event) => {
            setData({ ...data, password: event.target.value });
          }}
        />
        <text className="em">Password</text>

        <text className="dyhaa">Don't you have an account??</text>

        {/* kung sa register mag link2 ka buhata lang ni */}
        {/* <Link to = '/' className = 'log'> Login </Link> */}
        <Link to="register" className="reg">
          Register
        </Link>

        <Link to="forgotpass" className="reg">
          ForgotPassword
        </Link>

        <button className="btn" type="button" onClick={submit}>
          <text className="txt">Login</text>
        </button>
        <p className="msgcolor msgposition">{msg}</p>
      </div>
    </div>
  );
};

export default Login;
