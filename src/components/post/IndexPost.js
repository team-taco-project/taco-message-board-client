import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { indexAllPosts } from '../../api/post'
import { showIndexFailure } from '../AutoDismissAlert/messages'
import Card from 'react-bootstrap/Card'
import './post.scss'
// create index of all posts class and constructor with state
class IndexAllPosts extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      post: null,
      loading: true
    }
  }

  // occurs on page render first time
  componentDidMount () {
    const { msgAlert } = this.props
    // API call for index of all posts
    indexAllPosts()
      .then((response) =>
        this.setState({
          post: response.data.posts,
          loading: false
        })
      )
      // .then(() =>
      //   msgAlert({
      //     heading: 'Index Success',
      //     message: showIndexSuccess,
      //     variant: 'success'
      //   })
      // )
      .catch(() =>
        msgAlert({
          heading: 'Index Fail',
          message: showIndexFailure,
          variant: 'danger'
        })
      )
  }

  render () {
    // if statement handles the issue when state is null
    // cannot handle initial render with null.
    if (this.state.post === null) {
      return 'loading...'
    }
    // variable to save array.map()
    let postJsx
    if (this.posts === null) {
      <h3>No post</h3>
    } else {
      // create list of posts
      postJsx = this.state.post.map((post) => (
        <li key={post._id}>
          <Card className='box-post' style={{ width: '80%' }}>
            <Card.Body className="bg-box">
              <Link className="link-title" to={`/post/${post._id}`}>
                <Card.Title className='title-post'>{post.title}</Card.Title>
              </Link>
              <h5>User</h5>
              <Card.Subtitle className='mb-2 text-muted'>
                {post.userEmail}
              </Card.Subtitle>
              <h5>Subject</h5>
              <Card.Subtitle className='mb-2 text-muted'>
                {post.subject}
              </Card.Subtitle>
              <h5>Text</h5>
              <Card.Text>{post.content}</Card.Text>
              <Link to={`/post/${post._id}/edit`} className="btn btn-outline-secondary">Update Post</Link>
            </Card.Body>
          </Card>
          <br></br>
        </li>
      ))
    }
    return (
      <div>
        <h1 className="topic">All Posts Here</h1>
        <p>{this.state.loading && 'loading ...'}</p>
        {/* display posts most recent post first */}
        <ul>{postJsx.reverse()}</ul>
      </div>
    )
  }
}

export default withRouter(IndexAllPosts)
