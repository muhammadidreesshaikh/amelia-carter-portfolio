import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { MotionConfig } from 'framer-motion';
import App from './App';
import theme from './theme';
import './styles.css';

if (window.location.hash.startsWith('#/')) {
  const targetPath = window.location.hash.slice(1);
  window.location.replace(`${targetPath}${window.location.search}`);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MotionConfig reducedMotion="user">
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MotionConfig>
    </ThemeProvider>
  </React.StrictMode>,
);