import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './authContext/AuthContext';
import { HelmetProvider } from "react-helmet-async";
const helmetContext={};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider context={helmetContext}>
    <React.StrictMode>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </React.StrictMode>
  </HelmetProvider>
);


