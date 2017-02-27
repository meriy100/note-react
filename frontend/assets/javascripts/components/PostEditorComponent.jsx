import React, { PropTypes, Component } from 'react'
import CodeMirror from 'react-codemirror'
import { Link } from 'react-router' 
require('codemirror/mode/markdown/markdown')

class PostEditorComponent extends Component {
  componentDidMount() {
    let { params, getPost } = this.props
    getPost(params.id)
  }

  handleEditBody(body) {
    let { editBody } = this.props
    editBody(body)
  }

  render() {
    let { post, editBody } = this.props
    let options = {
      lineNumbers: true,
      mode: 'markdown',
    }
    return (
      <div>
        <CodeMirror value={post.body} onChange={ this.handleEditBody.bind(this) } options={options} />
      </div>
    )
  }
}

export default PostEditorComponent
