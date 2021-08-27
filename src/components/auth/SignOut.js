import { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signOut } from '../../api/auth'
import { signOutSuccess } from '../AutoDismissAlert/messages'
// Create sign out class
class SignOut extends Component {
  // on page load
  componentDidMount () {
    // destructuring props for later use
    const { msgAlert, history, clearUser, user } = this.props
    // sign out API call
    signOut(user)
      .finally(() =>
        msgAlert({
          heading: 'Signed Out Successfully',
          message: signOutSuccess,
          variant: 'success'
        })
      )
      // redirects user on sign out
      .finally(() => history.push('/'))
      // clears user
      .finally(() => clearUser())
  }

  render () {
    return ''
  }
}

export default withRouter(SignOut)
