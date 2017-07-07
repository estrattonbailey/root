import React from 'react'
import { Route } from 'react-router-dom'
import scroller from 'scroll-restoration'

import Header from 'Components/Header'
import Footer from 'Components/Footer'
import Home from 'Pages/Home'
import Projects from 'Pages/Projects'
import Project from 'Pages/Project'

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

  componentWillUnmount () {
    window.removeEventListener('popstate', this.handleScroll)
  }

  render () {
    return (
      <div>
        <Header />

        <Route exact path='/' component={Home} />
        <Route exact path='/oss' component={Projects} />
        <Route path='/oss/:slug' render={props => {
          const Render = demos[props.match.params.slug] || Project
          return <Render {...props} />
        }} />

        <Footer />
      </div>
    )
  }
}
