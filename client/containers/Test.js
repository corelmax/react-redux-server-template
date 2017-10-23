import React from 'react'
import { connect } from 'react-redux'

class Test extends React.Component {
  render () {
    return (
      <div id='container-Test'>
        Test Container
      </div>
    )
  }
}

export default connect(
  state => state,
  dispatch => ({
    dispatch: dispatch
  })
)(Test)
