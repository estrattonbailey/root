import React from 'react'
import { render } from 'react-dom'

import App from './App'

/**
 * Enable hot reloading for all subsequent modules
 */
if (module.hot && process && process.env.NODE_ENV !== 'production') {
  module.hot.accept()
}

/**
 * Other app code goes below
 */
render(<App />, document.getElementById('root'))
