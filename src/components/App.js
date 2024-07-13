import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import Register from './Register';
import Dashboard from './ITAsset/Dashboard';
import ITAsset from './ITAsset';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add this state

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  return (
    <Router>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<Main darkMode={darkMode} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} darkMode={darkMode} />} />
        <Route path="/login" element={<Login darkMode={darkMode} />} />
        <Route path="/forgot-password" element={<ForgotPassword darkMode={darkMode} />} />
        <Route path="/register" element={<Register darkMode={darkMode} />} />
        <Route path="/dashboard" element={<Dashboard darkMode={darkMode} />} />
        <Route path='/itasset/*' element={<ITAsset darkMode={darkMode} />} />
        {/* Add other routes here */}
      </Routes>
      <Footer darkMode={darkMode} />
    </Router>
  );
};

export default App;