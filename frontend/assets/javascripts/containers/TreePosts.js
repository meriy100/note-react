import { connect } from 'react-redux'
import { } from '../actions'
import TreePost from '../components/TreePost'

const mapStateToProps = (state) => {
  return {
    treePosts: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const TreePosts = connect(
  mapStateToProps,
  mapDispatchToProps
)(TreePost)

export default TreePosts
