import apiUrl from '../apiConfig'
import axios from 'axios'

// Create Post Request
// assume that `data` is an object with `title` and `director`
// { title: 'something', director: 'someone' }
export const createPost = (data, user) => {
  return axios({
    url: apiUrl + '/create-post',
    method: 'POST',
    data: { post: data },
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
// index all posts, no token needed.  Anyone can view posts.
export const indexAllPosts = () => {
  return axios({
    // method key sets the HTTP verb/method for this request
    // GET is the default method, so we can include or not up to us
    method: 'GET',
    url: apiUrl + '/posts-all'
  })
}

// GET /Posts/:id, requires token
export const showPost = (id, user) => {
  return axios({
    url: apiUrl + '/post/' + id,
    // method is optional, default is GET
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// DELETE /Posts/:id, requires token
export const deletePost = (id, user) => {
  return axios({
    url: apiUrl + '/post/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// PATCH /Posts/:id, requires token
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
