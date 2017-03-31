import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

// components
import Sidebar from './Sidebar.jsx'
import RootComponent from "./RootComponent.js"

class AppComponent extends Component {
  constructor(props) {
    super(props)
    let { setCurrentUser } = props
    setCurrentUser()
  }

  render() {
    return (
      <div className="container">
        <div className="row row-content">
          <Sidebar />
          <div className="main-content">
            {this.props.children || <RootComponent />}
          </div>
        </div>
      </div>
    )
  }
}
export default AppComponent
