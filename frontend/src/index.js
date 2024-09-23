import React from 'react';
import { createRoot } from 'react-dom/client';  // Atualizado para React 18
import App from './App';
import './App.css';

const container = document.getElementById('root');
const root = createRoot(container);  // Cria a root com createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
