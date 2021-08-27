import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'

// options available for authenticated user
const authenticatedOptions = (
  <Fragment>
    <NavLink to='/change-password' className='nav-link'>
        Change Password
    </NavLink>
    <NavLink to='/create-post' className='nav-link'>
        Create Post
    </NavLink>
    <NavLink to='/sign-out' className='nav-link'>
        Sign Out
    </NavLink>
  </Fragment>
)
// options available for unauthenticated user
const unauthenticatedOptions = (
  <Fragment>
    <NavLink to='/sign-up' className='nav-link'>Sign Up</NavLink>
    <NavLink to='/sign-in' className='nav-link'>Sign In</NavLink>
  </Fragment>
)
// options available regardless of authentication
const alwaysOptions = (
  <Fragment>
    <NavLink exact to='/posts-all' className='nav-link'>Home</NavLink>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg='primary' variant='dark' expand='md'>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ml-auto'>
        {/* determines if user is logged in */}
        {user && (
          <span className='navbar-text mr-2'>Welcome, {user.email}</span>
        )}
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
