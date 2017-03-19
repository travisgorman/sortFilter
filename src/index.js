import React from 'react';
import ReactDOM from 'react-dom';
import PRODUCTS from './data'
import App from './App'
import './index.css';


ReactDOM.render(
  <App products={PRODUCTS}/>,
  document.getElementById('root')
);
