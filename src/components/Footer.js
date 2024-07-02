// src/components/Footer.js
import React from 'react';
import reactLogo from '../assets/logo/react-logo.png';
import '../Footer.css';

const Footer = () => {
  return (
    <footer className="sticky-bottom bg-light py-1">
      <div className="container d-flex justify-content-between align-items-center">
        <span className="fw-bold">RTSB Support App</span>
        <span className="text-center">&copy; {new Date().getFullYear()}</span>
        <img src={reactLogo} alt="React Logo" style={{ width: '40px', height: 'auto' }} />
      </div>
    </footer>
  );
};

export default Footer;