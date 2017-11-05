import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'
import styles from './App.scss'

import JssProvider from 'react-jss/lib/JssProvider'
import { withStyles, MuiThemeProvider } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import { PaperGrid, PaperGridContainer } from '../components/PaperGrid'
import createContext from '../styles/createContext'
import Home from './Home'
import Test from './Test'

const cx = classNames.bind(styles)
const context = createContext()
const muiStyles = theme => ({
  '@global': {
    html: {
      background: theme.palette.background.default,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale'
    },
    body: {
      margin: 0
    }
  }
})

const AppWrapper = withStyles(muiStyles)(props => props.children)

class App extends Component {
  componentDidMount () {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render () {
    return (
      <JssProvider registry={context.sheetsRegistry} jss={context.jss}>
        <MuiThemeProvider theme={context.theme} sheetsManager={context.sheetsManager}>
          <AppWrapper>
            <div className={cx('App')}>
              <div className={cx('article-main-container')}>
                <PaperGridContainer>
                  <PaperGrid xs={12}>
                    Test
                  </PaperGrid>
                  <PaperGrid xs={12}>
                    <Switch>
                      <Route exact path='/' component={Home} />
                      <Route path='/test' component={Test} />
                    </Switch>
                  </PaperGrid>
                </PaperGridContainer>
              </div>
            </div>
          </AppWrapper>
        </MuiThemeProvider>
      </JssProvider>
    )
  }
}

export default connect(
  state => state,
  dispatch => ({
    dispatch: dispatch
  })
)(App)
