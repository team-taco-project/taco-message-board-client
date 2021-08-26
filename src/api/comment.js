import apiUrl from '../apiConfig'
import axios from 'axios'

// Create Post Request
// assume that `data` is an object with `title` and `director`
// { title: 'something', director: 'someone' }
export const createComment = (data, user, id) => {
  // data.postId = id
  return axios({
    url: apiUrl + '/comment/' + id,
    method: 'POST',
    data: { comment: data },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// Index request
// no data, we will need a token
export const indexPosts = (user) => {
  return axios({
    // method key sets the HTTP verb/method for this request
    // GET is the default method, so we can include or not up to us
    method: 'GET',
    url: apiUrl + '/posts',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
export const indexAllPosts = (user) => {
  return axios({
    // method key sets the HTTP verb/method for this request
    // GET is the default method, so we can include or not up to us
    method: 'GET',
    url: apiUrl + '/posts-all'
  })
}

// // GET /Posts/:id
// export const showPost = (id, user) => {
//   return axios({
//     url: apiUrl + '/post/' + id,
//     // method is optional, default is GET
//     headers: {
//       Authorization: `Bearer ${user.token}`
//     }
//   })
// }

// GET /Post no id
// export const showPost = (id) => {
//   return axios({
//     url: apiUrl + '/post/' + id
//   })
// }

// DELETE /Posts/:id
export const deleteComment = (id, user) => {
  console.log('delete')
  return axios({
    url: apiUrl + '/post/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// PATCH /Posts/:id
export const updatePost = (data, id, user) => {
  return axios({
    url: apiUrl + '/update-post/' + id,
    method: 'patch',
    data: { post: data },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
