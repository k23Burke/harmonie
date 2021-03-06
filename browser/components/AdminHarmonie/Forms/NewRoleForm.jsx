import React from 'react'
import { connect } from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { createThing } from './ThingActions'

export class NewRoleForm extends React.Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = { error: false }
  }

  handleSubmit (e) {
    e.preventDefault()
    const name = this.refs.name.value

    this.props.createThing(name)
  }

  render () {
    return (
      <form onSubmit={(e) => {this.handleSubmit(e)}}>
        <input type='text' ref='name' placeholder='Name' />
        <button type='submit'>create</button>
      </form>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    // user: state.
  }
}

export default connect(
  mapStateToProps,
  {
    createThing
  }
)(NewRoleForm)
