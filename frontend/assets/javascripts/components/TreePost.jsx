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
    let { id, post, name, children, dipth, visible, path, childVisible, clickTreePost, queryPosts } = this.props
    let styles = {paddingLeft: (dipth*10 + 15)}
    return (
      <div style={visible ? {display: "block"} : {display: "none"} }>
        <li
          className="list-group-item tree-li"
          onClick={()=> {
            if(post){
              this.context.router.push(`/posts/${post.id}`)
            }else{
              clickTreePost(id, path)
              queryPosts({ path_start: path })
            }
          }}
          style={styles} >
          {name}
        </li>
        {children.map(child =>
          <TreePost key={child.id}
            clickTreePost={clickTreePost}
            visible={childVisible}
            queryPosts={queryPosts}
            {...child} />
        )}
      </div>
    )
  }
}


export default TreePost
