import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/scss/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DataProvider } from './contexts/DataContext';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </StrictMode>
);

reportWebVitals();
