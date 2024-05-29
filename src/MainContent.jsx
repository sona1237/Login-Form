import React from 'react';
import Image1 from './Image1';
import Login from './Login';
import Image2 from './Image2';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <Image1 />
      <Login />
      <Image2 />
    </div>
  );
};

export default MainContent;
