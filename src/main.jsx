import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import Context from './Context/Context';


createRoot(document.getElementById('root')).render(
  <Context>
    <App />
  </Context>
);
