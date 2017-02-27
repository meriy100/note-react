import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

class PostEditorComponent extends Component {
  componentDidMount() {
    let { params, getPost } = this.props
    getPost(params.id)
  }

  handleEditBody(e) {
    let { editBody } = this.props
    editBody(e.target.value)
  }

  render() {
    let { post, editBody } = this.props
    return (
      <div>
        <textarea value={post.body} onChange={ (e) => this.handleEditBody(e) } />
      </div>
    )
  }
}

export default PostEditorComponent
