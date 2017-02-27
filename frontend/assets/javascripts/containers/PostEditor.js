import { connect } from 'react-redux'

import { handleGetPost, handleEditBody, handleEditPath, handleSubmitPost, setNewPost } from '../actions'
import PostEditorComponent from '../components/PostEditorComponent.jsx'


const mapStateToProps = (state) => {
  return {
    post: state.post,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (id) => { handleGetPost(id)(dispatch) },
    setNewPost: () => dispatch(setNewPost()),
    editPath: (path) => dispatch(handleEditPath(path)),
    editBody: (body) => dispatch(handleEditBody(body)),
    submitPost: (post) => { handleSubmitPost(post)(dispatch) },
  }
}

const PostEditor = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostEditorComponent)

export default PostEditor
