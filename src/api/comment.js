import apiUrl from '../apiConfig'
import axios from 'axios'

// Create comment API Request, requires user.token
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

// DELETE /Posts/:id, requires user.token
export const deleteComment = (postId, commentId, user) => {
  return axios({
    url: apiUrl + '/post/' + postId + '/' + commentId,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// PATCH /Posts/:id, requires token
export const updateComment = (data, postId, commentId, user) => {
  return axios({
    url: apiUrl + '/post/' + postId + '/' + commentId,
    method: 'PATCH',
    data: { post: data },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
