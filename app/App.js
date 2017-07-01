import React from 'react'
import { Route } from 'react-router-dom'

import { Outer, Container } from 'Components/Layout'
import Header from 'Components/Header'
import Home from 'Pages/Home'
import ProjectPage from 'Pages/ProjectPage'

import MicroGrid from 'Demos/MicroGrid'

const demos = {
  'micro-grid': MicroGrid
}

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
          <Route path='/oss/:slug' render={props => {
            const Render = demos[props.match.params.slug] || ProjectPage
            return <Render {...props} />
          }} />
        </Container>
      </Outer>
    )
  }
}
