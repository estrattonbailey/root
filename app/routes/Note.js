import React from 'react'
import { route } from 'foil'
import { connect } from '@picostate/react'

import store from 'state/store.js'
import { getNote } from 'app/api.js'
import Note from 'components/Note.js'

function exists (slug, notes) {
  return (notes || []).filter(n => (
    n.fields.slug === slug
  ))[0]
}

const path = '/notes/:slug'

function load ({ params }) {
  const { slug } = params

  if (
    store.state.notes &&
    exists(slug, store.state.notes)
  ) return

  return getNote(slug)
    .then(note => {
      store.hydrate(_ => {
        return {
          notes: exists(slug, _.notes) ? (
            _.notes
          ) : (
            _.notes ? _.notes.push(note) : [note]
          )
        }
      })
    }).catch(e => console.error(e))
}

export default route({
  path,
  payload: {
    Component: Note,
    load
  }
})
