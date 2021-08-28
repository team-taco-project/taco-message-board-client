import React, { Fragment } from 'react'
import Card from 'react-bootstrap/Card'
import Comment from './CommentForm'
import '../post/post.scss'

// create show post format
const Post = (props) => (
  <Fragment>
    <Card style={{ width: '100%' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>
          {props.subject}
        </Card.Subtitle>
        <Card.Text>{props.content}</Card.Text>
        <Card.Text>{props.image}</Card.Text>
        <Card.Text>post Id:{props.postId}</Card.Text>
        {/* <Card.Text>{props.comments.map(comment => comment.text)}</Card.Text> */}
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
