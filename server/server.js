import path from 'path'
import fs from 'fs'
import Express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { StaticRouter } from 'react-router'

import ServerRoutes from './routes'

import Config from './utils/config'

import AppRoutes from 'client/routes'
import AppReducers from 'client/reducers'

const app = Express()
const port = process.env.PORT || 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/public', Express.static(path.join(__dirname, 'public')))
app.use('/api', ServerRoutes)
app.use((req, res, done) => {
  const store = createStore(AppReducers)
  const context = {}
  const renderedContent = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        {AppRoutes}
      </StaticRouter>
    </Provider>
  )

  const initialState = store.getState()

  res
    .status(200)
    .render('index', {
      initialState: initialState,
      renderedContent: renderedContent
    })
})

app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})
