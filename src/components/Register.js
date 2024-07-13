import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import '../footer.css';
import '../header.css';
import '../floating-labels.css';

const Register = ({ darkMode }) => {
  return (
    <>
      <div className={`flex items-center justify-center min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        <div className={`${darkMode ? 'navbar-dark-mode' : ''} p-8 rounded-lg shadow-lg w-full max-w-md`}>
          <h2 className="text-2xl font-bold mb-4">Register</h2>
          <form>
            <div className="floating-label">
              <input
                type="text"
                id="username"
                placeholder=" "
                required
                className={darkMode ? 'dark-input' : ''}
              />
              <label htmlFor="username">Username</label>
            </div>
            <div className="floating-label">
              <input
                type="email"
                id="email"
                placeholder=" "
                required
                className={darkMode ? 'dark-input' : ''}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="floating-label">
              <input
                type="password"
                id="password"
                placeholder=" "
                required
                className={darkMode ? 'dark-input' : ''}
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="floating-label">
              <input
                type="password"
                id="confirm-password"
                placeholder=" "
                required
                className={darkMode ? 'dark-input' : ''}
              />
              <label htmlFor="confirm-password">Confirm Password</label>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
              >
                Register
              </button>
              <Link to="/login" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                Already have an account? Login
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer darkMode={darkMode} />
    </>
  );
};

export default Register;