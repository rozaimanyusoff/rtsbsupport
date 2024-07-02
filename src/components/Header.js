// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import brandLogo from '../assets/logo/Ranhill Technologies Logo (Original).png';

import '../Header.css';

const Header = () => {
  return (
    <>
      <nav className="sticky top-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <img src={brandLogo} alt="Logo" className="h-10 w-auto" />
                <span className="ml-2 text-xl font-bold">RTSB</span>
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="#info" className="text-gray-800 hover:text-gray-600">RTSB Info</a>
              <a href="#resources" className="text-gray-800 hover:text-gray-600">Resources</a>
              <a href="#support" className="text-gray-800 hover:text-gray-600">Support</a>
            </div>
            <div>
              <a href="/login" className="text-gray-800 hover:text-gray-600">Login</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to RTSB</h1>
            <p className="text-lg">Your go-to resource for all things RTSB</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;