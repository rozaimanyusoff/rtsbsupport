// src/components/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';
import '../theme.css';
import '../footer.css';
import '../header.css';
import '../floating-labels.css';

const Login = ({ onLogin, darkMode }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://j8.ranhilltechnologies.com.my/api/auth2', {
        auth: 'login',
        username: username,
        password: password
      });

      if (response.data.status === 'Success') {
        const token = response.data.token;
        // Store the token (you can use localStorage or context)
        localStorage.setItem('authToken', token);
        onLogin(); // Call the onLogin function passed as a prop
        navigate('/dashboard'); // Redirect to the dashboard after successful login
      } else {
        setError(response.data.message || 'Invalid username or password');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <div className={`flex items-center justify-center min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        <div className={`${darkMode ? 'navbar-dark-mode' : ''} p-8 rounded-lg shadow-lg w-full max-w-md`}>
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="floating-label">
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder=" "
                required
                className={darkMode ? 'dark-input' : ''}
              />
              <label htmlFor="username">Username</label>
            </div>
            <div className="floating-label">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=" "
                required
                className={darkMode ? 'dark-input' : ''}
              />
              <label htmlFor="password">Password</label>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
              >
                Sign In
              </button>
              <Link to="/forgot-password" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                Forgot Password?
              </Link>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm">Don't have an account?</span>
              <Link to="/register" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer darkMode={darkMode} />
    </>
  );
};

export default Login;