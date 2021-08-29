import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
// API request
import { updatePost, showPost } from '../../api/post'
import { updatePostSuccess, updatePostFailure } from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './post.scss'

// create class for update post with constructor and state
class UpdatePost extends Component {
  constructor (props) {
    super(props)

    this.state = {
      post: {
        title: '',
        subject: '',
        content: '',
        image: ''
      }
    }
  }

  // on page load
  componentDidMount () {
    // destructuring props for later use
    const { match, user, msgAlert } = this.props
    // show post API call
    showPost(match.params.id, user)
      // sets new state of post
      .then(res => this.setState({ post: res.data.post }))
      .catch(err => msgAlert({
        heading: 'Show post failed :(',
        message: 'Something went wrong: ' + err.message,
        variant: 'danger'
      }))
  }

    // handles state change for input
    handleChange = (event) => {
      const userInput = { [event.target.name]: event.target.value }
      this.setState(currState => {
        // "Spread" out current post state key/value pairs
        return { post: { ...currState.post, ...userInput } }
      })
    }
    // updates post on click
    onUpdatePost = (event) => {
      // prevent page reload
      event.preventDefault()
      // destructuring props for later use
      const { user, msgAlert, history, match } = this.props
      // updatePost API call
      updatePost(this.state.post, match.params.id, user)
        .then(() => msgAlert({
          heading: 'Post Updated!',
          message: updatePostSuccess,
          variant: 'success'
        }))
        .then(res => history.push('/posts-all'))
        .catch(() => {
          msgAlert({
            heading: 'Post update failed :(',
            message: updatePostFailure,
            variant: 'danger'
          })
        })
    }
    render () {
      // destructuring state of post for later use
      const { title, subject, content, image } = this.state.post
      // update post form
      return (
        <>
          <div className='row' id='showPost'>
            <div className='col-sm-10 col-md-8 mx-auto mt-5'>
              <h3 className='register'>Update Post</h3>
              <Form onSubmit={this.onUpdatePost}>
                <Form.Group controlId='title'>
                  <Form.Label>Post Title :</Form.Label>
                  <Form.Control
                    required
                    name='title'
                    value={title}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group controlId='subject'>
                  <Form.Label>Subject :</Form.Label>
                  <Form.Control
                    required
                    name='subject'
                    value={subject}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group controlId='content'>
                  <Form.Label>Content :</Form.Label>
                  <Form.Control
                    required
                    name='content'
                    value={content}
                    as='textarea'
                    rows={4}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group controlId='image'>
                  <Form.Label>Image :</Form.Label>
                  <Form.Control
                    name='image'
                    value={image}
                    placeholder='image'
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <br />
                <div className='d-grid gap-2 col-6 mx-auto'>
                  <Button variant='primary' type='submit'>
                    Submit
                  </Button>
                </div>
                <Link to={'/posts-all'} className="btn btn-primary">Cancel</Link>
              </Form>
            </div>
          </div>
        </>
      )
    }
}

export default withRouter(UpdatePost)
