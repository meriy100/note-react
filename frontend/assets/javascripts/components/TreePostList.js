import React, { PropTypes, Component } from 'react'
import TreePost from './TreePost.jsx'

class TreePostList extends Component {
  componentDidMount() {
    // Injected by react-redux:
    let { queryTreePosts } = this.props
  }

  render() {
    let { treePosts, clickTreePost, queryPosts } = this.props
    let treePostListItem = treePosts.map(treePost =>
      <TreePost key={treePost.id}
        visible={true}
        clickTreePost={clickTreePost}
        queryPosts={queryPosts}
        {...treePost} />
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
