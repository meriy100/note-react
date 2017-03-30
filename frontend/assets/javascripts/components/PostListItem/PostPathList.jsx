import React, { PropTypes, Component } from 'react'

class PostPathList extends Component {
  render() {
    let {path_list, clickPathListItem, queryPosts} = this.props
    return(
      <div className="path-list">
        {path_list.map((pathListItem, idx) =>
          <a className="path-list-link" key={pathListItem.id}
            onClick={()=>{
              clickPathListItem(pathListItem.id, path_list.slice(0, idx + 1))
              queryPosts({ path_start: pathListItem.path }) }}>
            <span className="name">{pathListItem.name}</span><span className="slash">/</span>
          </a>
        )}
      </div>
    )
  }
}

export default PostPathList
