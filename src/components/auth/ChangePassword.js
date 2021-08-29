import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

import { changePassword } from '../../api/auth'
import { changePasswordSuccess, changePasswordFailure } from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import './auth.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey } from '@fortawesome/free-solid-svg-icons'

// create change password component
class ChangePassword extends Component {
  constructor (props) {
    super(props)

    this.state = {
      oldPassword: '',
      newPassword: ''
    }
  }

  // handles state change in input fields of form
  handleChange = (event) =>
    this.setState({
      [event.target.name]: event.target.value
    })

  // change password function on click event
  onChangePassword = (event) => {
  // prevents reset of browser
    event.preventDefault()
    // destructuring fo props for later use
    const { msgAlert, history, user } = this.props
    // api call to change password
    changePassword(this.state, user)
      .then(() =>
        msgAlert({
          heading: 'Change Password Success',
          message: changePasswordSuccess,
          variant: 'success'
        })
      )
    // returns to homepage
      .then(() => history.push('/posts-all'))
      .catch((error) => {
      // sets clears old and new password state if error
        this.setState({ oldPassword: '', newPassword: '' })
        msgAlert({
          heading: 'Change Password Failed with error: ' + error.message,
          message: changePasswordFailure,
          variant: 'danger'
        })
      })
  }

  render () {
  // destructuring of passwords for later use
    const { oldPassword, newPassword } = this.state
    return (
      <div className='row'>
        <div className='col-sm-10 col-md-8 mx-auto mt-5'>
          <center>
            <FontAwesomeIcon icon={faKey} size='3x' color='white' spin/>
            <h3 className='register'>Change Password</h3>
          </center>
          <Form onSubmit={this.onChangePassword}>
            <br></br>
            <Form.Group controlId='oldPassword'>
              <Form.Label className='register'>Old password :</Form.Label>
              <Form.Control
                required
                name='oldPassword'
                value={oldPassword}
                type='password'
                placeholder='Old Password'
                onChange={this.handleChange}
              />
            </Form.Group>
            <br></br>
            <Form.Group controlId='newPassword'>
              <Form.Label className='register'>New Password :</Form.Label>
              <Form.Control
                required
                name='newPassword'
                value={newPassword}
                type='password'
                placeholder='New Password'
                onChange={this.handleChange}
              />
            </Form.Group>
            <br></br>
            <Button variant='light' type='submit'>
            Change Password
            </Button>
            <Link to={'/posts-all'} className="btn btn-outline-light">Cancel</Link>
          </Form>
        </div>
      </div>
    )
  }
}

export default withRouter(ChangePassword)
