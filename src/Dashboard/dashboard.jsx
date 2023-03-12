import React, { useState } from 'react';
import './login.css';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser(user);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedIn(false);
  };

  return (
    <>
      <div className="container">
        {loggedIn ? (
          <Dashboard user={user} onLogout={handleLogout} />
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </>
  );
} 

export default App;
