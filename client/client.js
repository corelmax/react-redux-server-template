import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { hydrate } from 'react-dom'
import App from './containers/App'
import AppReducers from './reducers'

const initialState = window.__INITIAL_STATE__

delete window.__INITIAL_STATE__

const store = createStore(AppReducers, initialState)

hydrate(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)