import React from 'react'
// creating a component comment that accepts props it will be passed

const Comment = (props) => (
  <ul>
    <hr />
    <li className='bg-box' id='text-comment'>
        Comment : <br />
      <p>{props.text}</p>
    </li>
  </ul>
)

export default Comment
