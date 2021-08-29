import React from 'react'
import { withRouter, Link, NavLink } from 'react-router-dom'
import { indexAllPosts } from '../../api/post'
import { showIndexFailure, showIndexSuccess } from '../AutoDismissAlert/messages'
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
    const { user, msgAlert } = this.props
    // API call for index of all posts
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
          message: showIndexSuccess,
          variant: 'success'
        })
      )
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
            <Card.Body className='bg-box'>
              <Link className='link-title' to={`/post/${post._id}`}>
                <Card.Title className='title-post'>{post.title}</Card.Title>
              </Link>
              <Card.Subtitle className='mb-2 text-muted'>
                {post.subject}
              </Card.Subtitle>
              <Card.Text>{post.content}</Card.Text>
              <Link to={`/post/${post._id}/edit`} className='btn btn-outline-secondary'>
                        EDIT
              </Link>
            </Card.Body>
          </Card>
          <br></br>
        </li>
      ))
    }
    return (
      <div>
        <center>
          <br />
          <h1 className='topic'>Share your thought ..</h1>
        </center>
        <NavLink to='/create-post'>
          <button
            type='button'
            className='btn btn-secondary btn-lg'
            id='create-btn'>
              Create Post
          </button>
        </NavLink>
        <p>{this.state.loading && 'loading ...'}</p>

        {/* display posts */}
        <ul>{postJsx.reverse()}</ul>
      </div>
    )
  }
}

export default withRouter(IndexAllPosts)
