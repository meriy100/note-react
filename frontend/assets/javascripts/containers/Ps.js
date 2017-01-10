import { connect } from 'react-redux'
import { clickActionCI, clickActionT, clickActionS, clickActionCR } from '../actions'
import Posts from '../components/Posts'

const mapStateToProps = (state) => {
  return {
    str: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clickTriangle: () => dispatch(clickActionT()),
    clickSquare: () => dispatch(clickActionS()),
    clickCircle: () => dispatch(clickActionCI()),
    clickCross: () => dispatch(clickActionCR())
  }
}

const Ps = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts)

export default Ps
