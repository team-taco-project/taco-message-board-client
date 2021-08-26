// import React, { Component } from 'react'
// import { withRouter, Link } from 'react-router-dom'
// // API request
// import { deleteComment } from '../../api/comment'
// import Button from 'react-bootstrap/Button'
// // import Card from 'react-bootstrap/Card'
// // component imports
// import Post from '../ComponentForms/PostForm'
// import objectAssign from 'object-assign'

// class ShowComment extends Component {
//   constructor (props) {
//     super(props)

//     this.state = {
//       // using null as a starting value will help us manage the "loading state" of our ShowMovie component
//       post: { // this should not be null
//         text: '',
//         image: ''
//       }
//     }
//   }

//   componentDidMount () {
//     const { match, user, msgAlert } = this.props
//     showComment(match.params.id, user)
//       .then((res) => this.setState({ post: res.data.post }))
//       .then(() =>
//         msgAlert({
//           heading: 'Show post success',
//           message: 'Check out the post',
//           variant: 'success'
//         })
//       )
//       .catch((err) =>
//         msgAlert({
//           heading: 'Show post failed :(',
//           message: 'Something went wrong: ' + err.message,
//           variant: 'danger'
//         })
//       )
//   }

//   handleDeletePost = (event) => {
//     const { match, user, msgAlert, history } = this.props
//     console.log('comments', this.state.post.comments)
//     deletePost(match.params.id, user)
//       // Redirect to the list of posts
//       .then(() => history.push('/posts-all'))
//       .then(() =>
//         msgAlert({
//           heading: 'Delete post successfully',
//           message: 'post is no more',
//           variant: 'success'
//         })
//       )
//       .catch((err) =>
//         msgAlert({
//           heading: 'Delete post failed :(',
//           message: 'Something went wrong: ' + err.message,
//           variant: 'danger'
//         })
//       )
//   }

//     handleDeleteComment = () => {
//       const { user, msgAlert, history } = this.props
//       const commentId = objectAssign(this.state.post.comments)
//       console.log(commentId)
//       deleteComment(commentId, user)
//       // Redirect to the list of posts
//         .then(() => history.push('/post/:id'))
//         .then(() =>
//           msgAlert({
//             heading: 'Delete post successfully',
//             message: 'post is no more',
//             variant: 'success'
//           })
//         )
//         .catch((err) =>
//           msgAlert({
//             heading: 'Delete post failed :(',
//             message: 'Something went wrong: ' + err.message,
//             variant: 'danger'
//           })
//         )
//     }

//     render () {
//       const { title, subject, content, image, comments, _id } = this.state.post
//       return (
//         <>
//           {/* <Card style={{ width: '100%' }}>
//             <Card.Body>
//               <Card.Title>{title}</Card.Title>
//               <Card.Subtitle className="mb-2 text-muted">{subject}</Card.Subtitle>
//               <Card.Text>{content}</Card.Text>
//               <Card.Text>{image}</Card.Text>
//               <Card.Text>comment{comments.map(comment => comment.text)}</Card.Text> */}
//           {/* bringing in the component Post that is accepting passed down data as props */}
//           <Post
//             title={title}
//             subject={subject}
//             content={content}
//             image={image}
//             comments={comments}
//             // our function is passed in here as the onClick prop that will be sent to Post as props
//             onClick={this.handleDeleteComment}
//           />
//           <Button onClick={this.handleDeletePost}>Delete</Button>
//           <Link to={`/post/${_id}/comments`}>Comment</Link>

//         </>
//       )
//     }
// }

// export default withRouter(ShowPost)
