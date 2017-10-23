import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'
import styles from './App.scss'

import Home from './Home'
import Test from './Test'

const cx = classNames.bind(styles)

class App extends Component {
  render () {
    return (
      <div className={cx('App')}>
        <header className={cx('App-header')}>
          <h1 className={cx('App-title')}>Welcome to React</h1>
        </header>
        <div className={cx('article-main-container')}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/test' component={Test} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default connect(
  state => state,
  dispatch => ({
    dispatch: dispatch
  })
)(App)
