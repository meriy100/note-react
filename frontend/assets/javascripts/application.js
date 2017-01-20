import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, Link, browserHistory } from 'react-router'

// Middleware
import createLogger from 'redux-logger';

import note from './reducers'
import PostList from './containers/PostList'
import RootComponent from "./components/RootComponent"

let store = createStore(note,
  applyMiddleware(createLogger())
)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/posts" component={PostList}></Route>
      <Route path="/posts/:id" component={PostList}></Route>
      <Route path="/" component={RootComponent}></Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
