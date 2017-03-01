import React from 'react'
import { connect } from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { getVisitorData } from '../components/Visitor/VisitorActions'

import OrgSignUpForm from '../components/Forms/OrganizationSignUp'

export class OrgSignUpPage extends React.Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  componentWillMount() {
    this.props.getVisitorData()
  }

  render () {
    return (
      <div  className='container'>
        <div className='row'>
          <h1>Get Your Organization Harmonized</h1>
          <br/>
          <p>{"Complete the following form to recommend Harmonie for your organization. We can't wait to work with you to pursue sustainability and even save your organization money."}</p>
          <p>{"After the form is filled in, please click your email client and we will generate an email for you to send. It is THAT easy!"}</p>
          <p>{"Make sure to personalize the note with a statement explaining why you are motivated to join Harmonie. A little personal touch goes a long way!"}</p>
        </div>
        <div className='row'>
          <OrgSignUpForm />
        </div>
      </div>
    )
  }
}

function mapStateToProps (state, props) {
  return {
  }
}

export default connect(
  mapStateToProps,
  {
    getVisitorData
  }
)(OrgSignUpPage)

