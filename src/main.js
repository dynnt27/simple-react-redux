import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './containers/App.js';
import reducer from './reducers/index.js';


const store = createStore(reducer);

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
// document.addEventListener('DOMContentLoaded', function() {
//   ReactDOM.render(
//     React.createElement(App),
//     document.getElementById('root')
//   );
// });