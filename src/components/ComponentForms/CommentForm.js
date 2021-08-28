import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
// creating a component comment that accepts props it will be passed

const Comment = (props) => (
  <ul>
    <li>Comment: {props.text}</li>
    <li>Image: {props.image}</li>
    {/* here Comment is accepting onClick from props */}
    <Button
      class='btn btn-outline-danger'
      onClick={() => props.onClick(props._id)}>
        Delete
    </Button>
    <div className='divider' />
    <Link to={`/comments/${props.postId}/${props._id}/`}>
      <button type='button' className='btn btn-outline-dark'>
          Update
      </button>
      {/* <Button onClick={() => props.onClickUpdate(props._id)}>Update</Button> */}
    </Link>
  </ul>
)

export default Comment
