import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
// creating a component comment that accepts props it will be passed

const Comment = (props) => (
  <ul>
    <li>Comment: {props.text}</li>
    <li>Image: {props.image}</li>
    {/* here Comment is accepting onClick from props */}
    <Button onClick={() => props.onClick(props._id)}>Delete</Button>
    <Link to={`/comments/${props.postId}/${props._id}/`}>Update
      <Button onClick={() => props.onClickUpdate(props._id)}>Update</Button></Link>
  </ul>
)

export default Comment
