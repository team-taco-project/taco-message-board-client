import React from 'react'
// creating a component comment that accepts props it will be passed
const Comment = (props) => (
  <ul>
    <li>Comment: {props.text}</li>
    <li>Image: {props.image}</li>
  </ul>
)

export default Comment
