import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { createPost } from '../../api/post'
// import {
//   createPostSuccess,
//   createPostFailure
// } from '../AutoDismissAlert/messages'

class CreatePost extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      subject: '',
      content: '',
      image: ''
    }
  }

            handleChange = (event) =>
              this.setState({
                [event.target.name]: event.target.value
              })

            onCreatePost = (event) => {
              event.preventDefault()

              const { msgAlert, history, user } = this.props

              createPost(this.state, user)
                .then((res) => history.push('/posts'))
                .then(() =>
                  msgAlert({
                    heading: 'Post Created',
                    // message: createPostSuccess,
                    variant: 'success'
                  })
                )
                .then(() => history.push('/posts-all'))
                .catch((error) => {
                  this.setState({ title: '', subject: '', content: '', image: '' })
                  msgAlert({
                    heading: 'Change Password Failed with error: ' + error.message,
                    // message: createPostFailure,
                    variant: 'danger'
                  })
                })
            }

            render () {
              const { title, subject, content, image } = this.state
              return (
                <>
                  <div className='row'>
                    <div className='col-sm-10 col-md-8 mx-auto mt-5'>
                      <h3>Create Post</h3>
                      <Form onSubmit={this.onCreatePost}>
                        <Form.Group controlId='title'>
                          <Form.Label>Post Title</Form.Label>
                          <Form.Control
                            required
                            name='title'
                            value={title}
                            placeholder='Post Title'
                            onChange={this.handleChange}
                          />
                        </Form.Group>
                        <Form.Group controlId='subject'>
                          <Form.Label>Subject</Form.Label>
                          <Form.Control
                            required
                            name='subject'
                            value={subject}
                            placeholder='subject'
                            onChange={this.handleChange}
                          />
                        </Form.Group>
                        <Form.Group controlId='content'>
                          <Form.Label>content</Form.Label>
                          <Form.Control
                            required
                            name='content'
                            value={content}
                            placeholder='content'
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

export default withRouter(CreatePost)
