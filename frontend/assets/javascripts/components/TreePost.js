import React, { PropTypes } from 'react'

const TreePost = ({id, name, children, dipth, visible, childVisible, toggleVisibleTreePost }) => (
  <div style={visible ? {display: "block"} : {display: "none"} }>
    <li
      className="list-group-item tree-li"
      onClick={()=> toggleVisibleTreePost(id)}
      style={{paddingLeft: (dipth*10 + 15)}} >
      {name}
    </li>
    {children.map(child =>
      <TreePost key={child.id} toggleVisibleTreePost={toggleVisibleTreePost} visible={childVisible} {...child} />
    )}
  </div>
)

export default TreePost
