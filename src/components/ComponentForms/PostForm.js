import React, { Fragment } from 'react'
import Card from 'react-bootstrap/Card'
import Comment from './CommentForm'
import '../post/post.scss'

// create show post format
const Post = (props) => (
  <Fragment>
    <Card id='showPost-bg' style={{ width: '100%' }}>
      <Card.Body>
  
        <center>
          <h2 className='register'> {props.title}</h2>{' '}
        </center>
        <h6>Subject : {props.subject}</h6>
        <Card.Text>{props.content}</Card.Text>
        <h6>Image : </h6>
        <h3>Post</h3>
        <h5>Title</h5>
        <Card.Title>{props.title}</Card.Title>
        <h6>User</h6>
        <Card.Subtitle className='mb-2 text-muted'>
          {props.userEmail}
        </Card.Subtitle>
        <h6>Sub-Title</h6>
        <Card.Subtitle className='mb-2 text-muted'>
          {props.subject}
        </Card.Subtitle>
        <h6>Text</h6>
        <Card.Text>{props.content}</Card.Text>
        <h6>Image</h6>
        <Card.Link href={props.image}>Image Link</Card.Link>
        <Card.Text>
          {props.comments.map(({ id, text, image, _id }) => (
            // passing props to comment form component
            <Comment
              key={id}
              text={text}
              image={image}
              _id={_id}
              postId={props.postId}
              // here we are carrying through onClick from Post to be handed down to Comment
              onClick={props.onClick}
              // onClickUpdate={props.onClickUpdate}
            />
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  </Fragment>
)

export default Post
