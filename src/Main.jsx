import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import CreatePost from './components/CreatePost/'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/createpost' component={CreatePost}/>
    </Switch>
  </main>
)

export default Main
