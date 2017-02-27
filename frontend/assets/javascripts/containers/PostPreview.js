import { connect } from 'react-redux'

import PostPreviewComponent from '../components/PostPreviewComponent.jsx'

const mapStateToProps = (state) => {
  return {
    post: state.post,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const PostPreview = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostPreviewComponent)

export default PostPreview
