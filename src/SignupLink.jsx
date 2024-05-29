import React from 'react';
import './Login.css'; // Ensure this component uses the same CSS file

const SignupLink = () => {
  return (
    <div className="signup-container">
      <span>Don’t have an account? </span>
      <a href="#" className="signup-link">Sign up</a>
    </div>
  );
};

export default SignupLink;
