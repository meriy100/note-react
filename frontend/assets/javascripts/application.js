import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, Link, browserHistory } from 'react-router'

// Middleware
import createLogger from 'redux-logger';

import note from './reducers'
import Posts from './containers/Posts'


import App from "./components/App.jsx"

import RootComponent from "./components/RootComponent"
import Sidebar from "./components/Sidebar.jsx"
import Post from "./containers/Post"
import PostEditorMaster from './components/PostEditorMaster.jsx'

import PlayRoom from "./containers/PlayRoom"
import playRoom from './lib/play_room'

import axiosHelper from './lib/axiosHelper'


let store = createStore(note,
  applyMiddleware(createLogger())
)


if(document.URL.match('/play_room')) {
  // axiosHelper.get('/api/playlist').then((response) => {
  //   console.log(response)
  //   playRoom(response.data.video_id)
  // })
}
render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/posts" component={Posts}></Route>
        <Route path="/posts/new" component={PostEditorMaster}></Route>
        <Route path="/posts/:id" component={Post}></Route>
        <Route path="/posts/:id/edit" component={PostEditorMaster}></Route>
        <Route path="/play_room" component={PlayRoom}></Route>
      </Route>
      <Route path="*" component={App}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)
