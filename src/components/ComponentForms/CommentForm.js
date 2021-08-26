import React from 'react'
import Button from 'react-bootstrap/Button'
// creating a component comment that accepts props it will be passed

const Comment = (props) => (
  <ul>
    <li>Id: {props._id}</li>
    <li>Comment: {props.text}</li>
    <li>Image: {props.image}</li>
    {/* here Comment is accepting onClick from props */}
    <Button onClick={() => props.onClick(props._id)}>Delete</Button>
    <Button onClick={props.onClickUpdate}>Update</Button>
  </ul>
)

export default Comment