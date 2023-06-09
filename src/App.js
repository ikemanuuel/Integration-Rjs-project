import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Authentication/Login/Login";
import Register from "./Authentication/Register/Register";
import ForgotPass from "./Authentication/Forgotpass/Forgotpass";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Activated from "./Pages/Activated/activated";
import Resident from "./Pages/Resident/Resident";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotpass" element={<ForgotPass />} />
            <Route path="/dash/*" element={<Dashboard />} />
            <Route path="/Activated" element={<Activated />} />
            <Route path="/resident/*" element={<Resident />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
