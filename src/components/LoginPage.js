import React, { useState } from 'react';

function LoginPage({ onLogin }) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'user' && password === '12345678') {
      setLoggedIn(true);
      onLogin();
    }
  };

  if (isLoggedIn) {
    return null; 
  }

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
