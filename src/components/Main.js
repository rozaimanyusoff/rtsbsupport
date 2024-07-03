// src/components/Main.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../footer.css';
import '../main.css';
import '../header.css';
import '../theme.css';

const Main = ({darkMode}) => {

  return (
    
    <div className="main-container">
      <Header />
      <div className="content">
        {/* Your main page content here */}
              <div className="flex flex-col min-h-screen">
        <div className={`flex-grow flex items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
          <div className="text-center">
            <h1 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>Welcome to RTSB</h1>
            <p className={`text-lg ${darkMode ? 'text-white' : 'text-black'}`}>Your go-to resource for all things RTSB</p>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;