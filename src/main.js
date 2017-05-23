import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App.js';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
  );
});