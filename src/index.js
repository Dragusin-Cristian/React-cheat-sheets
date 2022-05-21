import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './store/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // wrap the ContextProvider around App:
  <AuthContextProvider> <App /></AuthContextProvider>
);

