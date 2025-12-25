import React from 'react';
import ReactDOM from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ClerkProvider
    frontendApi={import.meta.env.VITE_CLERK_FRONTEND_API}
    publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY} // Add this line
  >
    <App />
  </ClerkProvider>
);
