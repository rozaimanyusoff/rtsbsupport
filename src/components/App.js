// src/components/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Login from './Login'; // Import the Login component here
import '../theme.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} /> {/* Add Login route */}
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;