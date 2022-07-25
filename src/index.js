import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import './nes-icon.scss';
import "nes.css/css/nes.min.css";
import "nes.icons/css/nes-icons.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

