import React from 'react'
import { route } from 'foil'
import { connect } from '@picostate/react'

import store from 'state/store.js'
import { getHome } from 'app/api.js'
import HomeHeader from 'components/HomeHeader.js'
import Internets from 'components/Internets.js'
import Projects from 'components/Projects.js'
import Resume from 'components/Resume.js'

const path = '/'

const Home = connect(state => ({
  data: state.home
}))(
  function Home (props) {
    return (
      <React.Fragment>
        <HomeHeader />
        <Internets />
        <Projects />
        <Resume />
      </React.Fragment>
    )
  }
)

function load () {
  if (store.state.home) return

  return getHome()
    .then(data => {
      store.hydrate({ home: data })
    }).catch(e => console.error(e))
}

export default route({
  path,
  payload: {
    Component: Home,
    load
  }
})
