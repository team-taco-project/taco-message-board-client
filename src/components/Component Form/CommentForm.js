import React from 'react'
import Button from 'react-bootstrap/Button'
// import deleteComment from '../../api/comment'
// import handleDeleteComment from '../post/ShowPost'

// creating a component comment that accepts props it will be passed

const Comment = (props) => (
  <ul>
    <li>Comment: {props.text}</li>
    <li>Image: {props.image}</li>
    <Button onClick={props.handleDeleteComment}>Delete</Button>
  </ul>
)

export default Comment
