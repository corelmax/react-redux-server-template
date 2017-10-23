import React from 'react'
import { connect } from 'react-redux'

class Home extends React.Component {
    render() {
        return (
            <div id="container-home">
                Home Container
            </div>
        )
    }
}

export default connect(
    state => state,
    dispatch => ({
        dispatch: dispatch
    })
)(Home)