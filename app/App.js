import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from 'Pages/Home'

export default class App extends React.Component {
  constructor (p) {
    super(p)

    this.state = {}
  }

  render () {
    return (
      <Router>
        <div>
          <Route path='/' component={Home} />
        </div>
      </Router>
    )
  }
}
