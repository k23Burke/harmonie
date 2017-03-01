import React from 'react'
import { connect } from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { userLogin, getStuff, logout } from '../components/Auth/AuthActions'
import LoginForm from '../components/Auth/LoginForm'
import SignupForm from '../components/Auth/SignupForm'

export class AdminHomePage extends React.Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  handleLogout (e) {
    e.preventDefault()
    this.props.logout()
  }

  render () {
    return (
      <div  className='container'>
        <div className='row'>
          <h1>Admin Home</h1>
          <br/>
        </div>
        <button onClick={(e) => this.handleLogout(e)}>Logout NEED TO DO!</button>
      </div>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    user: state.auth
  }
}

export default connect(
  mapStateToProps,
  {
    userLogin, getStuff, logout
  }
)(AdminHomePage)

