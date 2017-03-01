import React from 'react'
import { connect } from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'
// import { userLogin } from './AuthActions'

export class OrgSignUpForm extends React.Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = { error: false }
  }

  handleSubmit (e) {
    e.preventDefault()
    const fname = this.refs.fname.value
    const lname = this.refs.lname.value

    // this.props.userLogin(email, pass)
  }

  render () {
    const roles = this.props.roles ? this.props.roles : []
    const orgs = this.props.orgs ? this.props.orgs : []
    return (
      <form onSubmit={(e) => {this.handleSubmit(e)}}>
        <div className='row'>
          <div className='four columns'>
            <input type='text' ref='fname' placeholder='First Name'/>
          </div>
          <div className='four columns'>
            <input type='text' ref='lname' placeholder='Last Name'/>
          </div>
          <div className='four columns'>
            <input type='email' ref='email' placeholder='Email Address'/>
          </div>
        </div>
        <div className='row'>
          <div className='six columns'>
            <input type='password' ref='password' placeholder='Password'/>
          </div>
          <div className='six columns'>
            <select ref='roleType' defaultValue='0'>
              <option value='0' disabled>Select Role Type</option>
              {roles.map( role =>
                <option key={role.get('id')} value={role.get('id')}>{role.get('title')}</option>
              )}
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='six columns'>
            <input type='text' ref='cname' placeholder='Company Name'/>
          </div>
          <div className='six columns'>
            <select ref='orgType' defaultValue='0'>
              <option value='0' disabled>Select Organization Type</option>
              {orgs.map( org =>
                <option key={org.get('id')} value={org.get('id')}>{org.get('title')}</option>
              )}
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='six columns'>
            <input type='text' ref='stAdd1' placeholder='Street Address 1'/>
          </div>
          <div className='six columns'>
            <input type='text' ref='stAdd2' placeholder='Street Address 2'/>
          </div>
        </div>
        <div className='row'>
          <div className='four columns'>
            <input type='text' ref='city' placeholder='City'/>
          </div>
          <div className='four columns'>
            <input type='text' ref='state' placeholder='State'/>
          </div>
          <div className='four columns'>
            <input type='text' ref='zip' placeholder='Zip Code'/>
          </div>
        </div>
        <div className='twelve columns'>
          <button type='submit'>login</button>
        </div>
      </form>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    roles: state.visitors.getIn(['data', 'roleTypes']),
    orgs: state.visitors.getIn(['data', 'organizationTypes'])
  }
}

export default connect(
  mapStateToProps,
  {
    // userLogin
  }
)(OrgSignUpForm)

