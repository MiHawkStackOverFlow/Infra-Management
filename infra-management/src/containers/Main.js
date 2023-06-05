import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Main extends Component {
  render() {
    return (
      <div>Main</div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => {}

export default connect(mapStateToProps, mapDispatchToProps)(Main)