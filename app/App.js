import React from 'react'
import { Route } from 'react-router-dom'

import { Outer, Container } from 'Components/Layout'
import Header from 'Components/Header'
import Home from 'Pages/Home'
import ProjectPage from 'Pages/ProjectPage'

export default class App extends React.Component {
  constructor (p) {
    super(p)

    this.state = {}
  }

  render () {
    return (
      <Outer>
        <Container>
          <Header />

          <Route exact path='/' component={Home} />
          <Route path='/oss/:slug' component={ProjectPage} />
        </Container>
      </Outer>
    )
  }
}
