import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// From here Added by Sathish
import { Amplify } from 'aws-amplify';
import config from './aws-exports'; // Your Amplify configuration file
import '@aws-amplify/ui-react/styles.css'; // Import Amplify CSS for the authenticator

Amplify.configure(config); // Configure Amplify with your Cognito settings

// Up to here Added by Sathish

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
