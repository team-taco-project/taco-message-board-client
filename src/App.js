/* eslint-disable no-tabs */
import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import PostCreate from './components/post/PostCreate'
import IndexAllPosts from './components/post/IndexPost'
import ShowPost from './components/post/ShowPost'
import UpdatePost from './components/post/UpdatePost'
import CreateComment from './components/comment/CreateComment'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = (user) => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter((msg) => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return {
        msgAlerts: [...state.msgAlerts, { heading, message, variant, id }]
      }
    })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <p>title</p>
        <Header user={user} />
        {msgAlerts.map((msgAlert) => (
          <AutoDismissAlert
            key={msgAlert.id}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
        <main className='container'>
          {/* unauthenticated post routes */}
          <Route
            path='/sign-up'
            render={() => (
              <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
            )}
          />
          <Route
            path='/sign-in'
            render={() => (
              <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
            )}
          />
          <Route
            path='/posts-all'
            render={() => <IndexAllPosts msgAlert={this.msgAlert} />}
          />

          {/* authenticated post routes */}
          <AuthenticatedRoute
            user={user}
            path='/sign-out'
            render={() => (
              <SignOut
                msgAlert={this.msgAlert}
                clearUser={this.clearUser}
                user={user}
              />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path='/change-password'
            render={() => (
              <ChangePassword msgAlert={this.msgAlert} user={user} />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path='/create-post'
            render={() => <PostCreate msgAlert={this.msgAlert} user={user} />}
          />
          <AuthenticatedRoute
            user={user}
            path='/post/:id/edit'
            render={() => <UpdatePost msgAlert={this.msgAlert} user={user} />}
          />
          <AuthenticatedRoute
            user={user}
            exact path='/post/:id'
            render={() => <ShowPost msgAlert={this.msgAlert} user={user}/>}
          />
          {/* authenticated comments routes */}
          <AuthenticatedRoute
            user={user}
            exact path='/post/:id/comments'
            render={() => <CreateComment msgAlert={this.msgAlert} user={user}/>}
          />
        </main>
      </Fragment>
    )
  }
}

export default App
