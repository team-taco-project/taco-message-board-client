import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import './Header.scss'

// import styled from 'styled-components'
// options available for authenticated user
const authenticatedOptions = (
  <Fragment>
    <NavLink to='/change-password' className='nav-link' id='text-bar'>
                Change Password
    </NavLink>
    {/* <NavLink to='/create-post' className='nav-link' id='text-bar'>
                Create Post
        </NavLink> */}
    <NavLink to='/sign-out' className='nav-link' id='text-bar'>
                Sign Out
    </NavLink>
  </Fragment>
)
// options available for unauthenticated user
const unauthenticatedOptions = (
  <Fragment>

    <NavLink to='/sign-up' className='nav-link' id='text-bar'>
          Sign Up
    </NavLink>
    <NavLink to='/sign-in' className='nav-link' id='text-bar'>
          Sign In
    </NavLink>
  </Fragment>
)
// options available regardless of authentication
const alwaysOptions = (
  <Fragment>
    <NavLink exact to='/posts-all' className='nav-link' id='text-bar'>
        List of Posts
    </NavLink>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar
    className='navbar1'
    variant='dark'
    expand='md'
    padding="right">
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ml-auto'>
        {/* determines if user is logged in */}
        {user && (
          <span className='navbar-text mr-2' id="add-margin">Welcome, {user.email}</span>
        )}
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
