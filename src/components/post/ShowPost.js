import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
// API request
import { showPost, deletePost } from '../../api/post'
import { deleteComment } from '../../api/comment'
import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'
// component imports
import Post from '../ComponentForms/PostForm'

class ShowPost extends Component {
  constructor (props) {
    super(props)

    this.state = {
      // using null as a starting value will help us manage the "loading state" of our ShowMovie component
      post: { // this should not be null
        title: '', // must provide starting values for the form inputs
        subject: '',
        content: '',
        image: '',
        comments: []
      }
    }
  }

  // CreateComment.js:33
  // {data: {…}, status: 201, statusText: "Created", headers: {…}, config: {…}, …}
  // config: {url: "http://localhost:4741/comment/6125141280c41110440de06c", method: "post", data: "{\"comment\":{\"text\":\"what is your id\",\"image\":\"\"}}", headers: {…}, transformRequest: Array(1), …}
  // data:
  // post:
  // comments: Array(10)
  // 0:
  // createdAt: "2021-08-24T17:52:28.343Z"
  // image: ""
  // text: "comment"
  // updatedAt: "2021-08-24T17:52:28.343Z"
  // _id: "612531dc66083d133a7acf52"

  componentDidMount () {
    // one of the automatic router props we get is the match object - that has data about the params in our front-end route url
    const { match, user, msgAlert } = this.props
    showPost(match.params.id, user)
      .then((res) => this.setState({ post: res.data.post }))
      .then(() =>
        msgAlert({
          heading: 'Show post success',
          message: 'Check out the post',
          variant: 'success'
        })
      )
      .catch((err) =>
        msgAlert({
          heading: 'Show post failed :(',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      )
  }

  handleDeletePost = (event) => {
    const { match, user, msgAlert, history } = this.props
    deletePost(match.params.id, user)
      // Redirect to the list of posts
      .then(() => history.push('/posts-all'))
      .then(() =>
        msgAlert({
          heading: 'Delete post successfully',
          message: 'post is no more',
          variant: 'success'
        })
      )
      .catch((err) =>
        msgAlert({
          heading: 'Delete post failed :(',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      )
  }

    handleDeleteComment = (_id) => {
      console.log('id', _id)
      const { match, user, msgAlert, history } = this.props
      deleteComment(match.params.id, _id, user)
      // Redirect to the list of posts
        .then(() => history.push('/post/:id'))
        .then(() =>
          msgAlert({
            heading: 'Delete comment successfully',
            message: 'post is no more',
            variant: 'success'
          })
        )
        .catch((err) =>
          msgAlert({
            heading: 'Delete post failed :(',
            message: 'Something went wrong: ' + err.message,
            variant: 'danger'
          })
        )
    }

    render () {
      const { title, subject, content, image, comments, _id } = this.state.post
      return (
        <>
          {/* bringing in the component Post that is accepting passed down data as props */}
          <Post
            title={title}
            subject={subject}
            content={content}
            image={image}
            comments={comments}
            // our function is passed in here as the onClick prop that will be sent to Post as props
            onClick={this.handleDeleteComment}
            onClickUpdate={this.handleUpdateComment}
          />
          <Button onClick={this.handleDeletePost}>Delete</Button>
          <Link to={`/comments/${_id}`}>Comment</Link>
        </>
      )
    }
}

export default withRouter(ShowPost)
