import React, { Fragment } from 'react'
import Card from 'react-bootstrap/Card'
import Comment from './Comment'
// creating a post component that is accepting the props it will be passed
const Post = (props) => (
  <Fragment>
    <Card style={{ width: '100%' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.subject}</Card.Subtitle>
        <Card.Text>{props.content}</Card.Text>
        <Card.Text>{props.image}</Card.Text>
        {/* <Card.Text>{props.comments.map(comment => comment.text)}</Card.Text> */}
        <Card.Text>{props.comments.map(({ id, text, image }) => (
          <Comment
            key={id}
            text= {text}
            image= {image}
          />
        ))}</Card.Text>
      </Card.Body>
    </Card>
  </Fragment>
)

export default Post
