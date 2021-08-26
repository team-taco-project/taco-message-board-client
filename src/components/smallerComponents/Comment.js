import React from 'react'
import Button from 'react-bootstrap/Button'
// creating a component comment that accepts props it will be passed

const Comment = (props) => (
  <ul>
    <li>Comment: {props.text}</li>
    <li>Image: {props.image}</li>
    {/* here Comment is accepting onClick from props */}
    <Button onClick={props.onClick}>Delete</Button>
  </ul>
)

export default Comment
