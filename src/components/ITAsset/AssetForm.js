import React from 'react';

const AssetForm = ({ darkMode }) => {
  return (
    <div className={`main-container ${darkMode ? 'dark-mode' : ''}`}>
      <h1>Asset Form Page</h1>
      {/* Add form content here */}
    </div>
  );
};

export default AssetForm;