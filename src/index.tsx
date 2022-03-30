import React from 'react';

import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import '@styles/style.scss';

ReactDom.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
