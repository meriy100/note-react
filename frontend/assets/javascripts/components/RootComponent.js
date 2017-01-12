import React, { PropTypes } from 'react'
import TreePosts from "../containers/TreePosts"

const RootComponent = (treePosts) => (
  <div className="row">
    <h1>Note</h1>
    <div className="col-md-2 col-sm-4 tree-list">
      <ul className="treeview">
        <TreePosts />
      </ul>
    </div>
  </div>
)

export default RootComponent
