import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import CvPortfolio from './components/cv-portfolio.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CvPortfolio config={CONFIG} />
  </React.StrictMode>,
);
