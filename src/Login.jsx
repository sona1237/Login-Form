import React from 'react';
import './Login.css';
import LoginButton from './LoginButton';
import SignupLink from './SignupLink';
import LoginFormFields from './LoginFormFields';

const Login = () => {
  return (
    <div className="login-container">
      <h1 className="login-heading">Log In</h1>
      <form className="login-form">
        <LoginFormFields />
        <LoginButton />
      </form>
      <SignupLink />
    </div>
  );
};
export default Login;
