import React, { Component } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

class Sidebar extends Component {
  render() {
    return(
      <div className="sidebar">
        <nav className="nav-sidebar">
          <ul className="nav nav-ul">
            <li className="nav-li">
              <Link to="/posts/new" >
                <i className="fa fa-pencil fa-3x" />
                <p>New Post</p>
              </Link>
            </li>
            <li className="nav-li">
              <Link to="/" >
                <i className="fa fa-home fa-3x" />
                <p>HOME</p>
              </Link>
            </li>
            <li className="nav-li">
              <Link to="/play_room" >
                <i className="fa fa-music fa-3x" />
                <p>PlayRoom</p>
              </Link>
            </li>
            <li className="nav-li">
              <a href="/logout" >
                <i className="fa fa-sign-out fa-3x" />
                <p>Logout</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar
