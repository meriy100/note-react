import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { Router, Route, Link, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import posts from './reducers/posts'
import Ps from './containers/Ps'

let store = createStore(posts)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Ps}></Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
