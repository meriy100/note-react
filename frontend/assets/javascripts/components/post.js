import React, { PropTypes } from 'react'

const Post = ({ body }) => (
  <li>
    {body}
  </li>
)

Post.propTypes = {
  body: PropTypes.string.isRequired
}

export default Post

