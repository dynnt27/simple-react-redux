import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './containers/App.js';
// import reducer, { initialState } from './reducers/index.js';

const initialState = {
	feedTaken: 0,
	feedHistory: [],
	isFull: false,
	selectedAnimal: '',
}

const feed = (state = initialState, action) => {
	switch (action.type) {
		case "FEED_ANIMAL":
			return Object.assign({}, state, {
				feedTaken: state.feedTaken + 1,
				feedHistory: [...state.feedHistory, state.selectedAnimal],
				isFull: state.feedTaken > 6 ? true : false
			})
		case "FEED_ANIMAL_SELECT":
		console.log(action)
			return Object.assign({}, state, {
				selectedAnimal: action.target
			})
		default:
			return state
	}
}

console.log(initialState)
console.log(feed)

// create store accepts 3 parameters, (reducer, initalState, devtool)
const store = createStore(feed, initialState, 
	window.devToolsExtension ? window.devToolsExtension() : undefined);

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)