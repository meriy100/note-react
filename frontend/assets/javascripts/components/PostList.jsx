import React, { PropTypes, Component } from 'react'
import PostListItem from './PostListItem.jsx'
import { Link } from 'react-router'

class PostList extends Component {
  static propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    }).isRequired).isRequired,
  }

  componentDidMount () {
    let queryPosts = this.props.queryPosts
    queryPosts()
  }
  render() {
    let { posts, queryPosts, clickPathListItem, clickArchivePost } = this.props
    return(
      <div>
        <h1>Posts</h1>
        <ul className="post-list list-group">
          {posts.map(post =>
            <PostListItem key={post.id}
              clickPathListItem={clickPathListItem}
              queryPosts={queryPosts}
              clickArchivePost={clickArchivePost}
              {...post} />
          )}
        </ul>
      </div>
    )
  }
}

export default PostList
