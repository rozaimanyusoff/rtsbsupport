import React from 'react';

const Header = () => {
  return (
    <head>
      <style>
        {`
          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }
          .blink {
            animation: blink 1s infinite;
          }
        `}
      </style>
    </head>
  );
};

export default Header;