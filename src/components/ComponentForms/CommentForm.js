import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
// creating a component comment that accepts props it will be passed
const Comment = (props) => (
  <Card>
    <Card.Header>Comment</Card.Header>
    <Card.Body>
      <Card.Text>
        {props.text}
      </Card.Text>
      <Link to={`/comments/${props.postId}/${props._id}/`} className="btn btn-outline-dark">Update Comment</Link>
      <Button class='btn btn-outline-danger' onClick={() => props.onClick(props._id)}>Delete Comment</Button>
    </Card.Body>
  </Card>
)

export default Comment
