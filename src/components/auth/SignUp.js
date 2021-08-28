import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signUp, signIn } from '../../api/auth'
import { signUpSuccess, signUpFailure } from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './auth.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
// create sign up class with constructor and state
class SignUp extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

    // handles change of state in input fields
    handleChange = (event) =>
      this.setState({
        [event.target.name]: event.target.value
      })

    // handles sign up function on click
    onSignUp = (event) => {
      // prevents page reload
      event.preventDefault()
      // deconstruct props for later use
      const { msgAlert, history, setUser } = this.props
      // sign up API call
      signUp(this.state)
        .then(() => signIn(this.state))
        .then((res) => setUser(res.data.user))
        .then(() =>
          msgAlert({
            heading: 'Sign Up Success',
            message: signUpSuccess,
            variant: 'success'
          })
        )
        // redirect user
        .then(() => history.push('/posts-all'))
        .catch((error) => {
          this.setState({ email: '', password: '', passwordConfirmation: '' })
          msgAlert({
            heading: 'Sign Up Failed with error: ' + error.message,
            message: signUpFailure,
            variant: 'danger'
          })
        })
    }

    render () {
      // destructuring state for later use
      const { email, password, passwordConfirmation } = this.state
      // sign up user form
      return (
        <div className='row'>
          <div className='col-sm-10 col-md-8 mx-auto mt-5'>
            <center>
              <FontAwesomeIcon
                icon={faUserPlus}
                size='3x'
                color='white'
              />

              <h3 className='register'>Sign Up</h3>
            </center>
            <br></br>
            <Form onSubmit={this.onSignUp}>
              <Form.Group controlId='email'>
                <Form.Label className='register'>
                  Email address :
                </Form.Label>
                <Form.Control
                  required
                  type='email'
                  name='email'
                  value={email}
                  placeholder='Enter email'
                  onChange={this.handleChange}
                />
                <br></br>
              </Form.Group>
              <Form.Group controlId='password'>
                <Form.Label className='register'>
                  Password :
                </Form.Label>
                <Form.Control
                  required
                  name='password'
                  value={password}
                  type='password'
                  placeholder='Password'
                  onChange={this.handleChange}
                />
                <br></br>
              </Form.Group>
              <Form.Group controlId='passwordConfirmation'>
                <Form.Label className='register'>
                  Password Confirmation :
                </Form.Label>
                <Form.Control
                  required
                  name='passwordConfirmation'
                  value={passwordConfirmation}
                  type='password'
                  placeholder='Confirm Password'
                  onChange={this.handleChange}
                />
              </Form.Group>
              <br></br>
              <Button variant='light' type='submit'>
                Register
              </Button>
            </Form>
          </div>
        </div>
      )
    }
}

export default withRouter(SignUp)
