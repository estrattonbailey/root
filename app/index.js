import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import scroller from 'scroll-restoration'

import App from './App'
import { Tap } from 'react-hydrate'

/**
 * Enable hot reloading for all subsequent modules
 */
if (module.hot && process && process.env.NODE_ENV !== 'production') {
  module.hot.accept()
}

scroller.init()

/**
 * Other app code goes below
 */
render((
  <Router>
    <Tap hydrate={window.__state || {}}>
      <App />
    </Tap>
  </Router>
), document.getElementById('root'))
