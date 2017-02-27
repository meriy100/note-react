import { connect } from 'react-redux'

import { handleGetPost, handleEditBody, handleEditPath, handleSubmitPost } from '../actions'
import PostEditorComponent from '../components/PostEditorComponent.jsx'


const mapStateToProps = (state) => {
  return {
    post: state.post,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (id) => { handleGetPost(id)(dispatch) },
    editBody: (body) => dispatch(handleEditBody(body)),
    editPath: (path) => dispatch(handleEditPath(path)),
    submitPost: (post) => { handleSubmitPost(post)(dispatch) },
  }
}

const PostEditor = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostEditorComponent)

export default PostEditor
