import React, { PropTypes, Component } from 'react'
import CodeMirror from 'react-codemirror'
import { Link } from 'react-router' 
require('codemirror/mode/markdown/markdown')

class PostEditorComponent extends Component {
  componentDidMount() {
    let { params, getPost, setNewPost } = this.props
    if(params.id) {
      getPost(params.id)
    } else {
      setNewPost()
    }
  }

  handleEditBody(body) {
    let { editBody } = this.props
    editBody(body)
  }

  handleEditPath(path) {
    let { editPath } = this.props
    editPath(path)
  }

  render() {
    let { post, submitPost } = this.props
    let options = {
      lineNumbers: true,
      mode: 'markdown',
    }
    return (
      <div >
        <div className="form-group">
          <input value={post.path} onChange={ (e) => this.handleEditPath(e.target.value) } className="form-control" />
        </div>
        <CodeMirror value={post.body} onChange={ this.handleEditBody.bind(this) } options={options} />
        <div className="from-group">
          <button onClick={(e) => submitPost(post)} className='btn btn-primary'>保存</button>
        </div>
      </div>
    )
  }
}

export default PostEditorComponent
