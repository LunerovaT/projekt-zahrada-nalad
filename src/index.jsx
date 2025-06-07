import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './global.css';
import App from './App.jsx';

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
