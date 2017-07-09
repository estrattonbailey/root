import React from 'react'
import { Route } from 'react-router-dom'
import scroller from 'scroll-restoration'
import { hydrate } from 'react-hydrate'
import Head from 'react-helmet'
import api from 'Util/api'
import Footer from 'Components/Footer'
import Home from 'Pages/Home'
import Projects from 'Pages/Projects'
import Project from 'Pages/Project'

class App extends React.Component {
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
    const { ogImage, bio } = this.props
    return (
      <Route component={props => {
        return (
          <div>
            <Head>
              <title>{`@estrattonbailey`}</title>
              <meta property='og:title' content='Eric Bailey' />
              <meta name='twitter:title' content='Eric Bailey' />
              <meta property='og:url' content={props.location.pathname} />
              <meta name='twitter:url' content={props.location.pathname} />
              <meta name='description' content={bio} />
              <meta property='og:description' content={bio} />
              <meta name='twitter:description' content={bio} />
              <meta name='twitter:image' content={ogImage} />
              <meta property='og:image' content={ogImage} />
            </Head>

            <Route exact path='/' component={Home} />
            <Route exact path='/oss' component={Projects} />
            <Route path='/oss/:slug' component={props => <Project slug={props.match.params.slug} />} />

            <Footer />
          </div>
        )
      }} />
    )
  }
}

export default hydrate(
  props => {
    return api.getEntries({
      content_type: 'homepage'
    }).then(({ items }) => {
      return {
        ogImage: items[0].fields.openGraphImage.fields.file.url,
        bio: items[0].fields.bio
      }
    }).catch(err => console.error('App', err))
  },
  state => ({
    ogImage: state.ogImage,
    bio: state.bio
  })
)(App)
