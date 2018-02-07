import React from 'react'
import { route } from 'foil'
import { connect } from '@picostate/react'

import store from 'state/store.js'
import { getNotes } from 'app/api.js'
import NotesList from 'components/Notes.js'

const path = '/notes'

function Notes (props) {
  return (
    <NotesList />
  )
}

function load () {
  if (store.state.notes) return

  return getNotes()
    .then(notes => {
      store.hydrate({ notes })
    }).catch(e => console.error(e))
}

export default route({
  path,
  payload: {
    Component: Notes,
    load
  }
})
