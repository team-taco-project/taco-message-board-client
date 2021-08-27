import apiUrl from '../apiConfig'
import axios from 'axios'

// Create comment Request
export const createComment = (data, user, id) => {
  // data.postId = id
  return axios({
    url: apiUrl + '/post/' + id,
    method: 'POST',
    data: { comment: data },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// DELETE /Posts/:id
export const deleteComment = (postId, commentId, user) => {
  console.log(postId, commentId)
  return axios({
    url: apiUrl + '/post/' + postId + '/' + commentId,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// PATCH /Posts/:id
export const updateComment = (data, postId, commentId, user) => {
  console.log(data, postId, commentId, user._id)
  console.log('inside updateComment')
  return axios({
    url: apiUrl + '/comments/' + postId + '/' + commentId,
    method: 'PATCH',
    data: { comment: data },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
