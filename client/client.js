import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { hydrate } from 'react-dom'
import { Router } from 'react-router'
import App from './containers/App'
import AppReducers from './reducers'
import Routes from './routes'

const initialState = window.__INITIAL_STATE__

delete window.__INITIAL_STATE__

const store = createStore(AppReducers, initialState, applyMiddleware(thunk))

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      {Routes}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
