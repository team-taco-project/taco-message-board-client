import React from 'react'
import { Link } from 'react-router-dom'
import { indexAllPosts } from '../../api/post'

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
    if (this.state.post === null) {
      return 'loading...'
    }
    let postJsx
    if (this.posts === null) {
      ;<h3>No post</h3>
    } else {
      postJsx = this.state.post.map((post) => (
        <li key={post._id}>
          <Link to={`/post/${post._id}`}>{post.title}</Link>
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

export default IndexAllPosts
