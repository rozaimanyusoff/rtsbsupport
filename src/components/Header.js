// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import brandLogoLight from '../assets/logo/Ranhill Technologies_AllBlack.png';
import brandLogoDark from '../assets/logo/Ranhill Technologies_ReverseWhite Transparent.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../header.css';
import '../theme.css';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <nav className={`sticky top-0 shadow-sm z-50 ${darkMode ? 'navbar-dark-mode' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <img src={darkMode ? brandLogoDark : brandLogoLight} alt="Logo" className="h-10 w-auto" />
                <span className={`ml-2 text-xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>RTSB</span>
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="#info" className={`${darkMode ? 'text-white' : 'text-black'} hover:text-gray-600`}>RTSB Info</a>
              <a href="#resources" className={`${darkMode ? 'text-white' : 'text-black'} hover:text-gray-600`}>Resources</a>
              <a href="#support" className={`${darkMode ? 'text-white' : 'text-black'} hover:text-gray-600`}>Support</a>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login" className={`${darkMode ? 'text-white' : 'text-black'} hover:text-gray-600`}>Sign in</Link>
              <button
                onClick={toggleDarkMode}
                className="text-white py-1 px-4 rounded-full bg-blue-500 hover:bg-blue-700 focus:outline-none"
                aria-label="Toggle Dark Mode"
              >
                <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;