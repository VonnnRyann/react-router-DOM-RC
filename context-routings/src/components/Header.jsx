import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm'

const Header = () => {
  return (
    <header>
        <Link to='/'>
        <h2>Logo</h2>
        </Link>
        <LoginForm />
        <Nav />
    </header>
  )
}

export default Header