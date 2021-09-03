import React from 'react'
import Button from 'react-bootstrap/Button'
// creating a component comment that accepts props it will be passed

const Comment = (props) => (
  <ul>
    <hr />
    <li className='bg-box' id='text-comment'>
        Comment : <br />
      <p>{props.text}</p>
    </li>
    <Button
      variant='light'
      className='btn btn-outline-danger'
      onClick={() => props.onClick(props._id)}>
        Delete
    </Button>
  </ul>
)

export default Comment
