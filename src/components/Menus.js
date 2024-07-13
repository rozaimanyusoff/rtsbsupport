// src/components/Menus.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../header.css';
import '../theme.css';

const Menus = ({ darkMode }) => {
  return (
    <nav className={`menu-header ${darkMode ? 'navbar-dark-mode' : ''}`}>
      <ul className="flex space-x-4">
        <li>
          <Link to="#" className={`${darkMode ? 'text-white' : 'text-black'} hover:text-gray-600`}>Assets</Link>
          <ul className="submenu">
            <li>
              <Link to="/dashboard" className={`${darkMode ? 'text-white' : 'text-black'} hover:text-gray-600`}>Dashboard</Link>
            </li>
            <li>
              <Link to="/asset-records" className={`${darkMode ? 'text-white' : 'text-black'} hover:text-gray-600`}>Asset Records</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Menus;