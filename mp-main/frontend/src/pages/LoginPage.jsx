import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const LoginPage = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <SignIn />
    </div>
  );
};

export default LoginPage;
