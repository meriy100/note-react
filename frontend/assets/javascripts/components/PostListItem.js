import React, { PropTypes } from 'react'

const PostListItem = ({ body }) => (
  <li>
    {body}
  </li>
)

PostListItem.propTypes = {
  body: PropTypes.string.isRequired
}

export default PostListItem

