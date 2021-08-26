import React from 'react'
import Button from 'react-bootstrap/Button'
// creating a component comment that accepts props it will be passed

const Comment = (props, { handleDeleteComment }) => (
  <ul>
    <li>Comment: {props.text}</li>
    <li>Image: {props.image}</li>
    <Button onClick={handleDeleteComment}>Delete</Button>
  </ul>
)

export default Comment
