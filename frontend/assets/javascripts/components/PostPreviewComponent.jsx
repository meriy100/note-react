import React, { PropTypes, Component } from 'react'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router'

class PostPreviewComponent extends Component {
  componentDidMount() {
  }

  render() {
    let { post } = this.props
    return (
      <div className="post-form">
        <h1>{post.name}</h1>
        <ReactMarkdown source={post.body} />
      </div>
    )
  }
}

export default PostPreviewComponent
 