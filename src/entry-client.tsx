import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import './index.css';
import '@/core/i18n/i18n-config.ts';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './core/app/router';

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>,
)
