import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PlanetsApp } from './PlanetsApp.jsx';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PlanetsApp />
    </BrowserRouter>
  </StrictMode>,
)
