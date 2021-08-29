import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { createPost } from '../../api/post'
import { createPostSuccess, createPostFailure } from '../AutoDismissAlert/messages'
import './post.scss'
// create create post class, constructor and state
class CreatePost extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      subject: '',
      content: '',
      image: '',
      userEmail: ''
    }
  }

  // sets state of userEmail on page load
  componentDidMount () {
    this.setState({ userEmail: this.props.user.email })
  }

  // changes state of input values
                handleChange = (event) =>
                  this.setState({
                    [event.target.name]: event.target.value
                  })

                // creates post on click
                onCreatePost = (event) => {
                  // prevent page refresh
                  event.preventDefault()
                  // destructuring props for use later
                  const { msgAlert, history, user } = this.props
                  // create post API call
                  createPost(this.state, user)
                    .then(() =>
                      msgAlert({
                        heading: 'Post Created',
                        message: createPostSuccess,
                        variant: 'success'
                      })
                    )
                    // redirect to after post created
                    .then((res) => history.push('/posts-all'))
                    .catch((error) => {
                      this.setState({ title: '', subject: '', content: '', image: '' })
                      msgAlert({
                        heading: 'Failed with error: ' + error.message,
                        message: createPostFailure,
                        variant: 'danger'
                      })
                    })
                    // redirect after post create fail
                    .then(() => history.push('/posts-all'))
                }

                render () {
                  // destructuring state for later use
                  const { title, subject, content, image } = this.state
                  // create create post form
                  return (
                    <>
                      <div className='row' id='showPost'>
                        <div className='col-sm-10 col-md-8 mx-auto mt-5'>
                          <center>
                            <h3 className='register'>Create Post</h3>
                          </center>
                          <Form onSubmit={this.onCreatePost}>
                            <Form.Group controlId='title'>
                              <Form.Label>Post Title :</Form.Label>
                              <Form.Control
                                required
                                name='title'
                                value={title}
                                placeholder='Post Title'
                                onChange={this.handleChange}
                              />
                            </Form.Group>
                            <br />
                            <Form.Group controlId='subject'>
                              <Form.Label>Subject :</Form.Label>
                              <Form.Control
                                required
                                name='subject'
                                value={subject}
                                placeholder='subject'
                                onChange={this.handleChange}
                              />
                            </Form.Group>
                            <br />
                            <Form.Group controlId='content'>
                              <Form.Label>content :</Form.Label>
                              <Form.Control
                                required
                                name='content'
                                value={content}
                                placeholder='content'
                                as='textarea'
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
                            <br />
                            <div className='d-grid gap-2 col-6 mx-auto'>
                              <Button variant='primary' type='submit'>
                                Submit
                              </Button>
                            </div>
                          </Form>
                        </div>
                      </div>
                    </>
                  )
                }
}

export default withRouter(CreatePost)
