import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, Link, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// Middleware
import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise'

import posts from './reducers/posts'
import PostList from './containers/PostList'
import RootComponent from "./components/RootComponent"

let store = createStore(posts,
  applyMiddleware(createLogger(), promiseMiddleware)
)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/posts" component={PostList}></Route>
      <Route path="/" component={RootComponent}></Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
