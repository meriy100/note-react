import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, Link, browserHistory } from 'react-router'

// Middleware
import createLogger from 'redux-logger';

import note from './reducers'
import PostList from './containers/PostList'

import App from "./components/App.jsx"

import RootComponent from "./components/RootComponent"
import Sidebar from "./components/Sidebar.jsx"

let store = createStore(note,
  applyMiddleware(createLogger())
)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/posts" component={PostList}></Route>
        <Route path="/posts/:id" component={PostList}></Route>
      </Route>
      <Route path="*" component={App}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)
