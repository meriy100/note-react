import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import TreePosts from "../containers/TreePosts"

const RootComponent = () => (
  <div className="row root-component">
    <div className="col-md-2 col-sm-4 tree-list">
      <TreePosts />
    </div>
  </div>
)

export default RootComponent
