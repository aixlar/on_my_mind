//REACT
import React from 'react'
//ROUTER
import { Link } from 'react-router-dom'

//STYLES
import './styles.css'

const Navbar = () => (
  <div className="navbar">
      <nav className=" btn__wrapper white_border is-mobile is-5">
         <div className="columns is-vcentered is-mobile is-pulled-left">
            <Link to="/">
              <a className="button is-primary btn btn__mod">ALL POSTS</a>
            </Link>
          </div>

          <div className="columns is-vcentered is-mobile is-pulled-right">
            <Link to="/createpost">
              <a className="button is-info btn btn__mod">CREATE POST</a>
            </Link>
        </div>
      </nav>
  </div>
)
export default Navbar
