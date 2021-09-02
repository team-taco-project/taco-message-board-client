import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
// API request
import { showPost, deletePost } from '../../api/post'
import { deleteComment } from '../../api/comment'
import Button from 'react-bootstrap/Button'
import Post from '../ComponentForms/PostForm'
import {
  showPostFailure, deletePostSuccess,
  deletePostFailure, deleteCommentSuccess, deleteCommentFailure
} from '../AutoDismissAlert/messages'
import './post.scss'
// creates single show post with constructor, state
class ShowPost extends Component {
  constructor (props) {
    super(props)

    this.state = {
      post: {
        title: '',
        subject: '',
        content: '',
        image: '',
        userEmail: '',
        comments: []
      }
    }
  }

  // on initial page render
  componentDidMount () {
    // destructuring props for later use
    const { match, user, msgAlert } = this.props
    // show post API call
    showPost(match.params.id, user)

      // sets state of post
      .then((res) => this.setState({ post: res.data.post }))
      // .then(() =>
      //   msgAlert({
      //     heading: 'Show post success',
      //     message: showPostSuccess,
      //     variant: 'success'
      //   })
      // )
      .catch(() =>
        msgAlert({
          heading: 'Show post failed :(',
          message: showPostFailure,
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
                        message: deletePostSuccess,
                        variant: 'success'
                      })
                    )
                    .catch(() =>
                      msgAlert({
                        heading: 'Delete post failed :(',
                        message: deletePostFailure,
                        variant: 'danger'
                      })
                    )
                }

                // handles delete comment
                handleDeleteComment = (_id) => {
                  // destructuring props for later use
                  const { match, user, msgAlert, history } = this.props
                  // delete comment API call
                  deleteComment(match.params.id, _id, user)
                    .then(() =>
                      msgAlert({
                        heading: 'Delete comment successfully',
                        message: deleteCommentSuccess,
                        variant: 'success'
                      })
                    )
                  // Redirect to the list of posts
                    .then(() => history.push('/posts-all/'))
                    .catch(() =>
                      msgAlert({
                        heading: 'Delete post failed :(',
                        message: deleteCommentFailure,
                        variant: 'danger'
                      })
                    )
                }

                render () {
                  // deconstructing state of post for later use
                  const { title, subject, content, image, comments, _id, userEmail } = this.state.post
                  // if no image show 'default image'
                  if (image === '') {
                    return (
                      <div>
                        {/* bringing in the component Post that is accepting passed down data as props */}
                        <br />
                        <Post
                          id='showPost-bg'
                          title={title}
                          subject={subject}
                          content={content}
                          image={
                            'https://image.shutterstock.com/image-vector/default-word-digital-style-glowing-600w-1668796114.jpg'
                          }
                          comments={comments}
                          userEmail={userEmail}
                          postId={_id}
                          // our functions are passed to PostForm
                          onClick={this.handleDeleteComment}
                          onClickUpdate={this.handleUpdateComment}
                        />
                        <br />
                        {/* button to delete post */}
                        <Button
                          onClick={this.handleDeletePost}
                          variant='danger'
                          className='btn-primary'>
                          Delete Post
                        </Button>
                        {/* create comment */}
                        <div className='divider' />
                        <Link to={`/comments/${_id}`} class='btn btn-secondary'>
                          Make Comment
                        </Link>
                      </div>
                    )
                  } else {
                    return (
                      <div>
                        {/* bringing in the component Post that is accepting passed down data as props */}
                        <br />
                        <Post
                          id='showPost-bg'
                          title={title}
                          subject={subject}
                          content={content}
                          image={image}
                          comments={comments}
                          userEmail={userEmail}
                          postId={_id}
                          // our functions are passed to PostForm
                          onClick={this.handleDeleteComment}
                          onClickUpdate={this.handleUpdateComment}
                        />

                        <br />
                        {/* button to delete post */}
                        <Button
                          onClick={this.handleDeletePost}
                          variant='danger'
                          className='btn-primary'>
                          Delete Post
                        </Button>
                        {/* create comment */}
                        <div className='divider' />
                        <Link to={`/comments/${_id}`} class='btn btn-secondary'>
                          Make Comment
                        </Link>
                      </div>
                    )
                  }
                }
}

export default withRouter(ShowPost)
