import React from 'react'
import { Route } from 'react-router-dom'
import scroller from 'scroll-restoration'

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

    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll () {
    scroller.restore()
  }

  componentDidMount () {
    window.addEventListener('popstate', this.handleScroll)
  }

  render () {
    return (
      <Route render={props => {
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
      }} />
    )
  }
}
