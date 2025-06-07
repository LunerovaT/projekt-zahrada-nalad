import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './global.css';

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
