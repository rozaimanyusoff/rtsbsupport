import React from 'react';
import '../footer.css';
import '../main.css';
import '../header.css';
import '../theme.css';

const Main = ({ darkMode }) => {
  return (
    <div className={`main-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>Welcome to RTSB</h1>
            <p className={`text-lg ${darkMode ? 'text-white' : 'text-black'}`}>Your go-to resource for all things RTSB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;