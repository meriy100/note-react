import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

class PostPreviewComponent extends Component {
  componentDidMount() {
  }

  render() {
    let { post } = this.props
    return (
      <div>
        {post.body}
      </div>
    )
  }
}

export default PostPreviewComponent
