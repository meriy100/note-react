import React, { PropTypes, Component } from 'react'
import PostListItem from './PostListItem.jsx'
import PostPathList from './PostListItem/PostPathList.jsx'
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
    let { queryPosts, posts }= this.props
    if (posts.length === 0) {
      queryPosts()
    }
  }
  render() {
    let { posts, currentPathList, queryPosts, clickPathListItem, clickArchivePost } = this.props
    return(
      <div>
        <h1>Posts</h1>
        <div>
          <PostPathList clickPathListItem={clickPathListItem}
            queryPosts={queryPosts}
            path_list={currentPathList}/>
          <Link to='/posts/new' className='btn btn-info btn-xs'><i className='fa fa-pencil'/> New Post</Link>
        </div>
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
