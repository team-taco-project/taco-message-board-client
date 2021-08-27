import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { createComment } from '../../api/comment'
// import {
//   createPostSuccess,
//   createPostFailure
// } from '../AutoDismissAlert/messages'

class CreateComment extends Component {
  constructor (props) {
    super(props)

    this.state = {
      text: '',
      image: ''
    }
  }

            handleChange = (event) =>
              this.setState({
                [event.target.name]: event.target.value
              })

            onCreateComment = (event) => {
              event.preventDefault()

              const { msgAlert, history, user, match } = this.props

              createComment(this.state, user, match.params.id)
                // .then((res) => console.log(res))
                // .then((res) => console.log(res.data.post.comments[0]._id))
                .then((res) => history.push('/post/' + match.params.id))
                .then(() =>
                  msgAlert({
                    heading: 'Comment Created',
                    // message: createCommentSuccess,
                    variant: 'success'
                  })
                )
                .catch((error) => {
                  this.setState({ text: '', image: '' })
                  msgAlert({
                    heading: 'Failed with error: ' + error.message,
                    // message: createCommentFailure,
                    variant: 'danger'
                  })
                  history.push('/post/' + match.params.id)
                })
            }

            render () {
              const { text, image } = this.state
              return (
                <>
                  <div className='row'>
                    <div className='col-sm-10 col-md-8 mx-auto mt-5'>
                      <h3>Create Comment</h3>
                      <Form onSubmit={this.onCreateComment}>
                        <Form.Group controlId='text'>
                          <Form.Label>Comment Text</Form.Label>
                          <Form.Control
                            required
                            name='text'
                            value={text}
                            placeholder='Comment Title'
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

export default withRouter(CreateComment)
