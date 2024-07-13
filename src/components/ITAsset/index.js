import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import AssetRecord from './Records';
import FormPage from './AssetForm';

const ITAsset = ({ darkMode }) => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard darkMode={darkMode} />} />
      <Route path="/record" element={<AssetRecord darkMode={darkMode} />} />
      <Route path="/form" element={<FormPage darkMode={darkMode} />} />
    </Routes>
  );
};

export default ITAsset;