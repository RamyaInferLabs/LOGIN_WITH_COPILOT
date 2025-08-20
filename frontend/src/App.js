
import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <div className="login-page">
        <h1>Welcome to the Login Page</h1>
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
