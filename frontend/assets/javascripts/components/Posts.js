import React, { PropTypes } from 'react'
import Post from './Post'

const Posts = ({ posts, clickQueryPosts, clickAddPost }) => (
  <div>
    <h1>Posts</h1>
    <button onClick={ clickQueryPosts }>Query</button>
    <button onClick={ clickAddPost }>Add</button>
    <ul>
      {posts.map(post =>
        <Post key={post.id} {...post} />
      )}
    </ul>
  </div>
)

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired).isRequired,
  clickQueryPosts: PropTypes.func.isRequired,
  clickAddPost: PropTypes.func.isRequired,
}

export default Posts
