import React, { PropTypes } from 'react'
import PostListItem from './PostListItem.jsx'
import { Link } from 'react-router'

const PostList = ({ posts }) => (
  <div>
    <h1>Posts</h1>
    <ul className="post-list list-group">
      {posts.map(post =>
        <PostListItem key={post.id} {...post} />
      )}
    </ul>
  </div>
)

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  }).isRequired).isRequired,
}

export default PostList
