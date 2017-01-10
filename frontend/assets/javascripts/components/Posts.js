import React, { PropTypes } from 'react'

const Posts = ({ posts, clickQueryPosts, clickAddPost }) => (
  <div>
    <h1>Posts</h1>
    <button onClick={ clickQueryPosts }>Query</button>
    <button onClick={ clickAddPost }>Add</button>
    <ul>
      {posts.map(post =>
        <li key={post.id} >
          {post.body}
        </li>
      )}
    </ul>
  </div>
)

Posts.propTypes = {
  posts: PropTypes.array,
  clickQueryPosts: PropTypes.func.isRequired,
  clickAddPost: PropTypes.func.isRequired,
}

export default Posts
