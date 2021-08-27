import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// API request
import { updateComment } from '../../api/comment'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class UpdateComment extends Component {
  constructor (props) {
    super(props)

    this.state = {
      // using null as a starting value will help us manage the "loading state" of our UpdateMovie component
      comment: { // this should not be null
        text: '',
        image: ''
      }
    }
  }

  // componentDidMount () {
  //   // one of the automatic router props we get is the match object - that has data about the params in our front-end route url
  //   const { match, user, msgAlert } = this.props

  //   showComment(match.params.postId, match.params.postId, user)
  //     .then(res => this.setState({ comment: res.data.comment }))
  //     .then(() => msgAlert({
  //       heading: 'Show comment success',
  //       message: 'Check out the comment',
  //       variant: 'success'
  //     }))
  //     .catch(err => msgAlert({
  //       heading: 'Show comment failed :(',
  //       message: 'Something went wrong: ' + err.message,
  //       variant: 'danger'
  //     }))
  // }

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
    console.log(match.params)
    updateComment(this.state.comment, match.params.id, match.params.postId, user)
      .then(res => history.push('/post/:id'))
      .then(() => msgAlert({ heading: 'Comment Updated!', message: 'Nice work, go check out your Comment.', variant: 'success' }))
      .catch(err => {
        msgAlert({
          heading: 'Comment update failed :(',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      })
  }

  render () {
    const { text, image } = this.state.comment
    return (
      <>
        <div className='row'>
          <div className='col-sm-10 col-md-8 mx-auto mt-5'>
            <h3>Update Comment</h3>
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

export default withRouter(UpdateComment)
