import React, { PropTypes, Component } from 'react'

class PostPathList extends Component {
  render() {
    let {path_list, clickPathListItem, queryPosts} = this.props
    return(
      <div className="path-list">
        {path_list.map(pathListItem =>
          <a className="path-list-link" key={pathListItem.id}
            onClick={()=>{
              clickPathListItem(pathListItem.id, pathListItem.path)
              queryPosts({ path_start: pathListItem.path }) }}>
            <span className="name">{pathListItem.name}</span><span className="slash">/</span>
          </a>
        )}
      </div>
    )
  }
}

export default PostPathList
