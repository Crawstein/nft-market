import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Particles from './components/Particles/Particles'
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
      <Particles />
    </Router>
  </React.StrictMode>
);

