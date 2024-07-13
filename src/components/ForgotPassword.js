import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import '../footer.css';
import '../header.css';
import '../floating-labels.css';

const ForgotPassword = ({ darkMode }) => {
  return (
    <>
      <div className={`flex items-center justify-center min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        <div className={`${darkMode ? 'navbar-dark-mode' : ''} p-8 rounded-lg shadow-lg w-full max-w-md`}>
          <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
          <form>
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
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
              >
                Reset Password
              </button>
              <Link to="/login" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                Back to Login
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer darkMode={darkMode} />
    </>
  );
};

export default ForgotPassword;