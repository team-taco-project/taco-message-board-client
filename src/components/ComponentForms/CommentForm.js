import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
// creating a component comment that accepts props it will be passed

const Comment = (props) => (
  <ul>
    <hr />
    <li className='bg-box' id='text-comment'>
        Comment : <br />
      <p>{props.text}</p>
    </li>
    <li>
      <Card.Link href={props.image}>Image Link</Card.Link>
    </li>
    <Button
      variant='light'
      className='btn btn-outline-danger'
      onClick={() => props.onClick(props._id)}>
        Delete
    </Button>
    <div className='divider' />
    <Link
      to={`/comments/${props.postId}/${props._id}/`}
      className='btn btn-outline-light'>
        Update Comment
      {/* <Button onClick={() => props.onClickUpdate(props._id)}>Update</Button> */}
    </Link>
  </ul>
)

export default Comment
