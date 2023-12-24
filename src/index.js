import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
// import DateCounter from './components/DateCounter.js';
import App from './App.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <DateCounter /> */}
    <App />
  </React.StrictMode>
);

