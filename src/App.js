import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ForgotPass from "./Pages/Forgotpass/Forgotpass";


function App() {
  return (
    
      <div className="App">
        <Router>
          <div className="container">
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path='register' element={<Register />} />
              <Route path = 'dash' element = {<Dashboard/>}/>
              <Route path = 'forgotpass' element = {<ForgotPass/>}/>
          </Routes>
          </div>
        </Router>
      </div>
    );
  }

export default App;