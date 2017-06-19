import React from 'react'
import { Route, Link } from 'react-router-dom'

import Home from 'Pages/Home'

export default class App extends React.Component {
  constructor (p) {
    super(p)

    this.state = {}
  }

  render () {
    return (
      <div>
        <Route path='/' component={Home} />
      </div>
    )
  }
}
