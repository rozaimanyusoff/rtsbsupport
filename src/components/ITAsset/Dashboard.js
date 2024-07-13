import React from 'react';

const Dashboard = ({ darkMode }) => {
  return (
    <div className={`main-container ${darkMode ? 'dark-mode' : ''}`}>
      <h1>Computer Asset Dashboard</h1>
      {/* Add dashboard content here */}
    </div>
  );
};

export default Dashboard;