import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { indexAllPosts } from '../../api/post'
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'

class IndexAllPosts extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      post: null,
      loading: true
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props

    indexAllPosts(user)
      .then((response) =>
        this.setState({
          post: response.data.posts,
          loading: false
        })
      )
      .then(() =>
        msgAlert({
          heading: 'Index Success',
          message: 'Here are the posts',
          variant: 'success'
        })
      )
      .catch(() =>
        msgAlert({
          heading: 'Index Fail',
          message: 'Fail',
          variant: 'danger'
        })
      )
  }

  render () {
    // if statement handles the issue when state is null
    // cannot handle initial render with null.
    const { match } = this.props
    if (this.state.post === null) {
      return 'loading...'
    }
    let postJsx
    if (this.posts === null) {
      <h3>No post</h3>
    } else {
      console.log('match params _id', match.params._id)
      postJsx = this.state.post.map((post) => (
        <li key={post._id}>
          <Card style={{ width: '100%' }}>
            <Card.Body>
              <Card.Link href={`/post/${post._id}`}>
                <Card.Title>{post.title}</Card.Title>
              </Card.Link>
              <Card.Subtitle className="mb-2 text-muted">{post.subject}</Card.Subtitle>
              <Card.Text>
                {post.content}
              </Card.Text>
              <Link to={`/post/${post._id}/edit`}>update</Link>
              <Card.Link href="#">delete</Card.Link>
              <Card.Link href="#">comments</Card.Link>
            </Card.Body>
          </Card>
        </li>
      ))
    }
    return (
      <div>
        <h1>post</h1>
        <p>{this.state.loading && 'loading ...'}</p>
        <ul>{postJsx}</ul>
      </div>
    )
  }
}

export default withRouter(IndexAllPosts)
