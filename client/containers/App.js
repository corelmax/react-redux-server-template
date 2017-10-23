import React, { Component } from 'react'
import classNames from 'classnames/bind'
import styles from './App.scss';

const cx = classNames.bind(styles)

class App extends Component {
  render() {
    return (
      <div className={cx("App")}>
        <header className={cx("App-header")}>
          <h1 className={cx("App-title")}>Welcome to React</h1>
        </header>
        <p className={cx("App-intro")}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
