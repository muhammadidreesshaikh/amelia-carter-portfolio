import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { MotionConfig } from 'framer-motion';
import App from './App';
import theme from './theme';
import './styles.css';

const routeRedirects = ['/logos-banners', '/models', '/backgrounds-thumbnails'];

if (routeRedirects.includes(window.location.pathname) && !window.location.hash) {
  window.location.replace(`/#${window.location.pathname}${window.location.search}`);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MotionConfig reducedMotion="user">
        <CssBaseline />
        <HashRouter>
          <App />
        </HashRouter>
      </MotionConfig>
    </ThemeProvider>
  </React.StrictMode>,
);