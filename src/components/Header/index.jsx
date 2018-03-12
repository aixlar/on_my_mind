//REACT
import React from 'react'
//ROUTER
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to='/createpost'>Create Post</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
