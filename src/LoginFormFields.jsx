import React from 'react';
import './Login.css'; // Ensure this component uses the same CSS file
import { AiFillEye } from 'react-icons/ai'; // Import the eye icon

const LoginFormFields = () => {
  return (
    <>
      <input
        type="email"
        placeholder="E-mail"
        className="login-input"
      />
      <div className="password-container">
        <input
          type="password"
          placeholder="Password"
          className="login-input"
        />
        <AiFillEye className="eye-symbol" /> {/* Replace the span with the icon */}
      </div>
      <a href="#" className="forgot-password">Forgot your password?</a>
    </>
  );
};

export default LoginFormFields;
