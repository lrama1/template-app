import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './routes';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Router>
      <Navigation />
      <AppRoutes />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);