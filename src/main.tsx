import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@/core/i18n/i18n-config.ts';
import App from './core/app/app';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
