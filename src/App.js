import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css'; // Import custom styles after Bootstrap
import Image1 from './Image1';
import Image2 from './Image2';
import Login from './Login';

function App() {
  return (
    <div className="app-container">
      <div className="container content-container">
        {/* Image column */}
        <div className="images-wrapper">
          <div className="image-container mb-3">
            <Image1 />
          </div>
          <div className="image-container">
            <Image2 />
          </div>
        </div>
        {/* Login component column */}
        <div className="login-wrapper">
          <Login />
        </div>
      </div>
    </div>
  );
}

export default App;
