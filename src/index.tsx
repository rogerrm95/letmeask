import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './services/firebase'

import { ThemeContextProvider } from './contexts/ThemeContext';

import './styles/global.scss'
import './styles/themes.scss'

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);