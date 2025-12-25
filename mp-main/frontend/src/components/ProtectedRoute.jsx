import React from 'react';
import { Navigate } from 'react-router-dom';
import { SignedIn, RedirectToSignIn } from '@clerk/clerk-react';

// ProtectedRoute component to wrap around routes that need authentication
const ProtectedRoute = ({ element }) => {
  return (
    <SignedIn>
      {element}
      <RedirectToSignIn />
    </SignedIn>
  );
};

export default ProtectedRoute;
