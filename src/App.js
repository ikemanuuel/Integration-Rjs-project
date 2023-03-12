import React, { useState } from "react";
import './app.css';
import { Login } from "./Pages/Login/Login";
import { Register } from "./Pages/Register/Register";


export function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      <div>
        <header className="header">
          <h1>BIMS</h1>
        </header>
      </div>
      
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

document.body.classList.add('body-style');

export default App;
