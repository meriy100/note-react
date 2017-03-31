import { connect } from 'react-redux'
import { handleSetCurrentUser } from '../actions/currentUser'
import AppComponent from '../components/AppComponent.jsx'

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: () => {
      handleSetCurrentUser()(dispatch)
    },
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)

export default App

