import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from '../home/Home'
import About from '../about/About'
import { TopBar } from '../lib'

const App = () => {
  return (
    <Router>
      <div className='App'>
        <TopBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </Switch>
      </div>
    </Router>
  )
}

App.displayName = 'App'

export default App
