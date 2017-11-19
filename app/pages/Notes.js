import React from 'react'
import { hydrate } from 'react-hydrate'
import Link from 'react-hydrate-link'
import api from 'Util/api'
import format from 'Util/date'

import Head from 'react-helmet'
import Header from 'Components/Header'
import { Outer, Container } from 'Components/Layout'
import Section from 'Components/Section'
import Markdown from 'Components/Markdown'

export default hydrate(
  (props, state) => {
    return api.getEntries({
      content_type: 'note',
    }).then(({ items }) => {
      return {
        notes: items.map(i => i.fields)
      }
    }).catch(err => {
      return {
        error: err
      }
    })
  },
  (state, props) => {
    if (!state.notes) return false

    return {
      notes: state.notes
    }
  }
)(({ data }) => {
  return (
    <div>
      <Header />

      <Outer>
        <Container>
          <section className='pv2 s1'>
            {data.notes.map(note => {
              return (
                <div key={note.slug} className='note pv2 s2'>
                  <p className='karla s6 mt0 mb1 gray i'>{format(note.date)}</p>
                  <h2 className='__title mv0 rel inline-block'>
                    <Link to={`/notes/${note.slug}`}>
                      {note.title}
                    </Link>
                  </h2>
                  <Markdown string={note.body} />
                </div>
              )
            })}
          </section>
        </Container>
      </Outer>
    </div>
  )
})
