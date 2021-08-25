import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { showPost } from '../../api/post'
import Card from 'react-bootstrap/Card'

class ShowPost extends Component {
  // constructor for show post
  constructor (props) {
    super(props)
    this.state = {
      post: null
    }
  }

  componentDidMount () {
    // destructuring props
    const { match, msgAlert } = this.props
    // gets single post
    showPost(match.params.id)
      .then(res => this.setState({
        post: res.data.post
      }))
      // success message
      .then(() => msgAlert({
        heading: 'Show post success',
        message: 'Checkout post',
        variant: 'success'
      }))
      // failure message
      .catch(() => msgAlert({
        heading: 'Show post fail',
        message: 'Fail',
        variant: 'danger'
      }))
  }

  render () {
    if (this.state.post === null) {
      return 'Loading...'
    }
    const { title, subject, content } = this.state.post
    return (
      <>
        <h3>Show Post</h3>
        <Card style={{ width: '100%' }}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{subject}</Card.Subtitle>
            <Card.Text>
              {content}
            </Card.Text>
            <Card.Link href="#">update</Card.Link>
            <Card.Link href="#">delete</Card.Link>
            <Card.Link href="#">comments</Card.Link>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default withRouter(ShowPost)
