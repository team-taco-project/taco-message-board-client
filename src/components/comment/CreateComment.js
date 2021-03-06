import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { createCommentSuccess, createCommentFailure } from '../AutoDismissAlert/messages'
import { createComment } from '../../api/comment'
import './comment.scss'
// create create comment class with constructor and state
class CreateComment extends Component {
  constructor (props) {
    super(props)

    this.state = {
      text: '',
      image: ''
    }
  }

        // handles state change of input fields
        handleChange = (event) =>
          this.setState({
            [event.target.name]: event.target.value
          })

        // handles create comment event on click
        onCreateComment = (event) => {
          // prevent browser refresh
          event.preventDefault()
          // deconstructing props for later use
          const { msgAlert, history, user, match } = this.props
          // create comment API call
          createComment(this.state, user, match.params.id)
            .then(() =>
              msgAlert({
                heading: 'Comment Created',
                message: createCommentSuccess,
                variant: 'success'
              })
            )
            // redirect user on create comment success
            .then((res) => history.push('/post/' + match.params.id))
            .catch((error) => {
              this.setState({ text: '', image: '' })
              msgAlert({
                heading: 'Failed with error: ' + error.message,
                message: createCommentFailure,
                variant: 'danger'
              })
              // redirect on create comment failure
              history.push('/post/' + match.params.id)
            })
        }

        render () {
          // destructuring state for later use
          const { text } = this.state
          // create comment form
          return (
            <>
              <div className='row' id='showPost'>
                <div className='col-sm-10 col-md-8 mx-auto mt-5'>
                  <h3 className='register'>Create Comment</h3>
                  <Form onSubmit={this.onCreateComment}>
                    <Form.Group controlId='text'>
                      <Form.Label>Comment Text :</Form.Label>
                      <Form.Control
                        required
                        name='text'
                        value={text}
                        placeholder='Comment Title'
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <br />
                    <Button variant='light' type='submit'>
                      Submit
                    </Button>
                    <div className='divider' />
                    <Link to={'/posts-all'} className='btn btn-outline-light'>
                      Cancel
                    </Link>
                  </Form>
                </div>
              </div>
            </>
          )
        }
}

export default withRouter(CreateComment)
