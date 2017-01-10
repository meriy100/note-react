import { connect } from 'react-redux'
import { clickActionQueryPosts, clickActionAddPost } from '../actions'
import Posts from '../components/Posts'

const mapStateToProps = (state) => {
  return {
    posts: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clickQueryPosts: () => dispatch(clickActionQueryPosts()),
    clickAddPost: () => dispatch(clickActionAddPost())
  }
}

const PostList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts)

export default PostList
