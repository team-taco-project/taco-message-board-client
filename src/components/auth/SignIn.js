import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signIn } from '../../api/auth'
import { signInSuccess, signInFailure } from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './auth.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
// Create sign in class with state
class SignIn extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: 'a@aa.com',
      password: '123'
    }
  }

    // handles state change of input fields
    handleChange = (event) =>
      this.setState({
        [event.target.name]: event.target.value
      })

    // handles sign in event
    onSignIn = (event) => {
      // prevents page reload
      event.preventDefault()
      // destructuring of props for later use
      const { msgAlert, history, setUser } = this.props
      // sign in API call
      signIn(this.state)
        .then((res) => setUser(res.data.user))
        .then(() =>
          msgAlert({
            heading: 'Sign In Success',
            message: signInSuccess,
            variant: 'success'
          })
        )
        // send to post list when success
        .then(() => history.push('/posts-all'))
        .catch((error) => {
          this.setState({ email: '', password: '' })
          msgAlert({
            heading: 'Sign In Failed with error: ' + error.message,
            message: signInFailure,
            variant: 'danger'
          })
        })
    }

    render () {
      // destructuring state for later use
      const { email, password } = this.state
      // sign in form
      return (
        <div className='row'>
          <div className='col-sm-10 col-md-8 mx-auto mt-5'>
            <center>
              <FontAwesomeIcon icon={faSignInAlt} size='3x' color='white' />
              <h3 className='register'>Sign In</h3>
            </center>
            <br></br>
            <Form onSubmit={this.onSignIn}>
              <Form.Group controlId='email'>
                <Form.Label className='register'>Email address :</Form.Label>
                <Form.Control
                  required
                  type='email'
                  name='email'
                  value={email}
                  placeholder='Enter email'
                  onChange={this.handleChange}
                />
              </Form.Group>
              <br></br>
              <Form.Group controlId='password'>
                <Form.Label className='register'>Password :</Form.Label>
                <Form.Control
                  required
                  name='password'
                  value={password}
                  type='password'
                  placeholder='Password'
                  onChange={this.handleChange}
                />
              </Form.Group>
              <br></br>
              <Button variant='light' type='submit'>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      )
    }
}

export default withRouter(SignIn)
