import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
// API request
import { updateComment } from '../../api/comment'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { updateCommentSuccess, updateCommentFailure } from '../AutoDismissAlert/messages'
import './comment.scss'
// create update comment class -- under construction
class UpdateComment extends Component {
  constructor (props) {
    super(props)

    this.state = {
      comment: {
        text: '',
        image: ''
      }
    }
  }

    handleChange = (event) => {
      // because `this.state.comment` is an object with multiple keys, we have to do some fancy updating
      const userInput = { [event.target.name]: event.target.value }
      this.setState(currState => {
        // "Spread" out current comment state key/value pairs, then add the new one at the end
        // this will override the old key/value pair in the state but leave the others untouched
        return { comment: { ...currState.comment, ...userInput } }
      })
    }

    onUpdateComment = (event) => {
      event.preventDefault()

      const { user, msgAlert, history, match } = this.props
      updateComment(this.state.comment, match.params.id, match.params.postId, user)
        .then(() => msgAlert({
          heading: 'Comment Updated!',
          message: updateCommentSuccess,
          variant: 'success'
        }))
        // redirect on success
        .then(res => history.push(`/post/${match.params.postId}`))
        .catch(() => {
          msgAlert({
            heading: 'Comment update failed :(',
            message: updateCommentFailure,
            variant: 'danger'
          })
        })
    }

    render () {
      // destructuring comment state for later use
      const { text, image } = this.state.comment
      // update comment form
      return (
        <>
          <div className='row' id='showPost'>
            <div className='col-sm-10 col-md-8 mx-auto mt-5'>
              <h3 className='register'>Update Comment</h3>
              <Form onSubmit={this.onUpdateComment}>
                <Form.Group controlId='text'>
                  <Form.Label>Comment Text</Form.Label>
                  <Form.Control
                    required
                    name='text'
                    value={text}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group controlId='image'>
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    name='image'
                    value={image}
                    placeholder='image'
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

export default withRouter(UpdateComment)
