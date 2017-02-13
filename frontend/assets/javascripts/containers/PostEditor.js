import { connect } from 'react-redux'

import { handleGetPost, handleEditBody } from '../actions'
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
  }
}

const PostEditor = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostEditorComponent)

export default PostEditor
