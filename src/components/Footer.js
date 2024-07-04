import React from 'react';
import reactLogo from '../assets/logo/react-logo-trn2.png';
import '../footer.css';
import '../theme.css';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`sticky-bottom py-2 ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container mx-auto flex justify-between items-center">
        <span className="fw-medium">&copy; {new Date().getFullYear()} RTSB Support App</span>
        <span className="text-start"></span>
        {/* <img src={reactLogo} alt="React Logo" className="h-6 w-auto" /> */}
      </div>
    </footer>
  );
};

export default Footer;