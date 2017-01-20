import React, { PropTypes, Component } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

class TreePost extends Component {
  componentDidMount() {
  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired
    }
  }

  render() {
    let { id, post, name, children, dipth, visible, childVisible, toggleVisibleTreePost } = this.props
    let styles = {paddingLeft: (dipth*10 + 15)}
    return (
      <div style={visible ? {display: "block"} : {display: "none"} }>
        <li
          className="list-group-item tree-li"
          onClick={()=>
            post ? this.context.router.push(`/posts/${post.id}`) : toggleVisibleTreePost(id)
          }
          style={styles} >
          {name}
        </li>
        {children.map(child =>
          <TreePost key={child.id} toggleVisibleTreePost={toggleVisibleTreePost} visible={childVisible} {...child} />
        )}
      </div>
    )
  }
}


export default TreePost
