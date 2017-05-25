import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './containers/App.js'
import style from './main.scss'

// @note: I declared this initial state
const initialState = {
	feedTaken: 0,
	feedHistory: [],
	isFull: false,
	selectedAnimal: '',
}

// This is your main reducer (@note: this is just for now because it is a small app)
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

// create store accepts 3 parameters, (/reducer/, initialState, /devtool/)
const store = createStore(feed, initialState, 
	window.devToolsExtension ? window.devToolsExtension() : undefined);

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)