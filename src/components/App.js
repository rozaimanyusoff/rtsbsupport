import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Menu from './Navbar';
import VerticalMenu from './VerticalMenu';

const App = () => {
  const [brandLogo, setBrandLogo] = useState('example_logo.png'); // Replace with dynamic value
  const [brandName, setBrandName] = useState('Your Brand Name'); // Replace with dynamic value
  const [userName, setUserName] = useState('John Doe'); // Replace with dynamic value
  const [userLevel, setUserLevel] = useState('Admin'); // Replace with dynamic value
  const [permLevel, setPermLevel] = useState(1); // Replace with dynamic value

  useEffect(() => {
    // Fetch user details and permission level from your backend
    // Example:
    // setBrandLogo('path_to_logo.png');
    // setBrandName('Your Actual Brand Name');
    // setUserName('Actual User Name');
    // setUserLevel('Actual User Level');
    // setPermLevel(actualPermLevel);

    // Simulated fetching
    setBrandLogo('actual_logo.png');
    setBrandName('Actual Brand Name');
    setUserName('Jane Doe');
    setUserLevel('Super Admin');
    setPermLevel(1); // Set this based on the fetched user permissions
  }, []);

  return (
    <div>
      <Header />
      <Menu brandLogo={brandLogo} brandName={brandName} userName={userName} userLevel={userLevel} />
      <VerticalMenu permLevel={permLevel} />
      <Main />
      <Footer />
    </div>
  );
};

export default App;