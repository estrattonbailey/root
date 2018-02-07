import React from 'react' // eslint-disable-line no-unused-vars
import { router, route } from 'foil'

import Home from 'routes/Home.js'
import Notes from 'routes/Notes.js'
import Note from 'routes/Note.js'

export default router(
  Home,
  Notes,
  Note,
  route({
    path: '*',
    payload: {
      Component: props => <h1>404</h1>
    }
  })
)
