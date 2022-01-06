import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <p>
        <Link to={'/'}>Home</Link>
      </p>
      <p>
        <Link to={'/about'}>About</Link>
      </p>
    </div>
  )
}

export default Header
