import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      username: '',
      name: ''
    };
  }

  handleLogin = () => {
    // Assuming you have an authentication mechanism in place
    // that verifies the login credentials

    // Fetch user profile data based on the logged-in user
    // and update the state variables
    // Replace this with your own logic to fetch user data
    const { username } = this.state;
    const userData = this.getUserData(username);
    if (userData) {
      this.setState({
        name: userData.name,
        loggedIn: true
      });
    } else {
      alert('Invalid username');
    }
  };

  handleLogout = () => {
    this.setState({
      loggedIn: false,
      username: '',
      name: ''
    });
  };

  getUserData = (username) => {
    // Replace this with your own logic to fetch user data from an API
    // or any other data source
    // For simplicity, we'll use a static object here
    const userProfiles = {
      user1: { name: 'John Doe' },
      user2: { name: 'Jane Smith' },
      user3: { name: 'Alice Johnson' }
    };

    return userProfiles[username];
  };

  render() {
    const { loggedIn, username, name } = this.state;

    return (
      <div>
        {!loggedIn ? (
          <div>
            <input
              type="text"
              value={username}
              onChange={(e) => this.setState({ username: e.target.value })}
              placeholder="Enter your username"
            />
            <button onClick={this.handleLogin}>Log In</button>
          </div>
        ) : (
          <div>
            <h1>Welcome, {name}!</h1>
            <button onClick={this.handleLogout}>Log Out</button>
          </div>
        )}
      </div>
    );
  }
}

export default Profile;
