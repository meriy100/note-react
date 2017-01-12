import React, { PropTypes, Component } from 'react'
import TreePost from './TreePost'

class TreePostList extends Component {
  componentDidMount() {
    // Injected by react-redux:
    let { queryTreePosts } = this.props
  }

  render() {
    let { treePosts } = this.props
    console.log(this.props)
    let treePostListItem = treePosts.map(treePost =>
      <TreePost key={treePost.id} {...treePost} />
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
