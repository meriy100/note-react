import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import TreePosts from "../containers/TreePosts"

const RootComponent = () => (
  <div>
    <h1>Note</h1>
    <Link to="/posts">Posts</Link>
    <div className="row">
      <div className="col-md-2 col-sm-4 tree-list">
        <ul className="treeview">
          <TreePosts />
        </ul>
      </div>
    </div>
  </div>
)

export default RootComponent
