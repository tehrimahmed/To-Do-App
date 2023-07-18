import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './components/LoginPage';
import TodoApp from './components/TodoApp';
import './components/styles.css';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="App">
      {!isLoggedIn ? <LoginPage onLogin={handleLogin} /> : <TodoApp onLogout={handleLogout} />}
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
