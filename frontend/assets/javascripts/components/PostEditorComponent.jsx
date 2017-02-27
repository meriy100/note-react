import React, { PropTypes, Component } from 'react'
import CodeMirror from 'react-codemirror'
import { Link } from 'react-router' 
require('codemirror/mode/markdown/markdown')

class PostEditorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submited: false,
    };
  }  
  componentDidMount() {
    let { params, getPost, setNewPost, post } = this.props
    if(params.id) {
      getPost(params.id)
    } else {
      setNewPost()
    }
  }

  componentDidUpdate() {
    let { post } = this.props
    if (this.state.submited) {
      this.context.router.push(`/posts/${post.id}`)
    }
  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired
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

  handleSubmitPost(post) {
    let { submitPost, params } = this.props
    submitPost(post).then(()=> {
      this.setState({submited: true})
    })
  }

  render() {
    let { post, submitPost } = this.props
    let options = {
      lineNumbers: true,
      mode: 'markdown',
    }
    return (
      <div key={post.id} >
        <div className="form-group">
          <input value={post.path} onChange={ (e) => this.handleEditPath(e.target.value) } className="form-control" />
        </div>
        <CodeMirror value={post.body} onChange={ this.handleEditBody.bind(this) } options={options} />
        <div className="from-group">
          <button onClick={(e) => this.handleSubmitPost(post)} className='btn btn-primary'>保存</button>
        </div>
      </div>
    )
  }
}

export default PostEditorComponent
