import React from 'react';

const Records = ({ darkMode }) => {
  return (
    <div className={`main-container ${darkMode ? 'dark-mode' : ''}`}>
      <h1>Asset Record</h1>
      {/* Add asset record content here */}
    </div>
  );
};

export default Records;