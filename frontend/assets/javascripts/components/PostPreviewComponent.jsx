import React, { PropTypes, Component } from 'react'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router'

class PostPreviewComponent extends Component {
  componentDidMount() {
  }

  render() {
    let { post } = this.props
    return (
      <div className="post-preview">
        <h1>{post.name}</h1>
        <div className="post-body-markdown">
            <ReactMarkdown source={post.body} />
        </div>
      </div>
    )
  }
}

export default PostPreviewComponent
 