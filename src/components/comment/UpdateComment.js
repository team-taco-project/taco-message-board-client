import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// API request
import { updatePost, showPost } from '../../api/post'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class UpdatePost extends Component {
  constructor (props) {
    super(props)

    this.state = {
      // using null as a starting value will help us manage the "loading state" of our UpdateMovie component
      post: { // this should not be null
        title: '', // must provide starting values for the form inputs
        subject: '',
        content: '',
        image: ''
      }
    }
  }

  componentDidMount () {
    // one of the automatic router props we get is the match object - that has data about the params in our front-end route url
    const { match, user, msgAlert } = this.props

    showPost(match.params.id, user)
      .then(res => this.setState({ post: res.data.post }))
      .then(() => msgAlert({
        heading: 'Show post success',
        message: 'Check out the post',
        variant: 'success'
      }))
      .catch(err => msgAlert({
        heading: 'Show post failed :(',
        message: 'Something went wrong: ' + err.message,
        variant: 'danger'
      }))
  }

  handleChange = (event) => {
    // because `this.state.post` is an object with multiple keys, we have to do some fancy updating
    const userInput = { [event.target.name]: event.target.value }
    this.setState(currState => {
      // "Spread" out current post state key/value pairs, then add the new one at the end
      // this will override the old key/value pair in the state but leave the others untouched
      return { post: { ...currState.post, ...userInput } }
    })
  }

  onUpdatePost = (event) => {
    event.preventDefault()

    const { user, msgAlert, history, match } = this.props

    updatePost(this.state.post, match.params.id, user)
      .then(res => history.push('/posts-all'))
      .then(() => msgAlert({ heading: 'Post Updated!', message: 'Nice work, go check out your Post.', variant: 'success' }))
      .catch(err => {
        msgAlert({
          heading: 'Post update failed :(',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      })
  }

  render () {
    const { title, subject, content, image } = this.state.post
    return (
      <>
        <div className='row'>
          <div className='col-sm-10 col-md-8 mx-auto mt-5'>
            <h3>Update Post</h3>
            <Form onSubmit={this.onUpdatePost}>
              <Form.Group controlId='title'>
                <Form.Label>Post Title</Form.Label>
                <Form.Control
                  required
                  name='title'
                  value={title}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId='subject'>
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  required
                  name='subject'
                  value={subject}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId='content'>
                <Form.Label>content</Form.Label>
                <Form.Control
                  required
                  name='content'
                  value={content}
                  as="textarea"
                  rows={4}
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
              <Button variant='primary' type='submit'>
                    Submit
              </Button>
            </Form>
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(UpdatePost)
