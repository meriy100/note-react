import React, { PropTypes, Component } from 'react'
import TreePost from './TreePost'

class TreePostList extends Component {
  componentDidMount() {
    // Injected by react-redux:
    let { queryTreePosts } = this.props
  }

  render() {
    let { treePosts, toggleVisibleTreePost } = this.props
    let treePostListItem = treePosts.map(treePost =>
      <TreePost key={treePost.id} visible={true} toggleVisibleTreePost={toggleVisibleTreePost} {...treePost} />
    )
    return (
      <ul className="treeview">
        {treePostListItem}
      </ul>
    )
  }
}

TreePostList.propTypes = {
}

export default TreePostList
