import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import { Router, Route, Link, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'



const store = createStore(todoApp)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/todo" component={App}></Route>
      <Route path="/" component={App}></Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
