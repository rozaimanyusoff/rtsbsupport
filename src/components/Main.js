// src/components/Main.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../Footer.css';
import '../Main.css';
import '../Header.css';

const Main = () => {
  return (
    <div className="main-container">
      <Header />
      <div className="content">
        {/* Your main page content here */}
        <h1>Welcome to RTSB Support App</h1>
        <p>Here you can find information, resources, and support.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Main;