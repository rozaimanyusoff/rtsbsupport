// src/components/Login.js
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import brandLogo from '../assets/logo/Ranhill Technologies Logo (Original).png';
import '../Footer.css';

import '../Header.css';

const Login = () => {
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
              <a href="/" className="text-gray-800 hover:text-gray-600">Home</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign In
              </button>
              <a href="/" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;