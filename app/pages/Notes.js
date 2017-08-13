import React from 'react'
import { hydrate } from 'react-hydrate'
import Link from 'react-hydrate-link'
import api from 'Util/api'
import format from 'Util/date'

import Head from 'react-helmet'
import Header from 'Components/Header'
import { Outer, Container } from 'Components/Layout'
import Section from 'Components/Section'

export default hydrate(
  (props, state) => {
    return api.getEntries({
      content_type: 'note',
      select: [
        'fields.slug',
        'fields.title',
        'fields.date',
        'fields.teaser'
      ]
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

    console.log(state.notes)

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
          <Section title='Notes'>
            {data.notes.map(note => {
              return (
                <Link to={`/notes/${note.slug}`} key={note.slug}>
                  <h3 className='mv0'>{note.title}</h3>
                  <p className='mv05'>{note.teaser}</p>
                  <p className='karla s6 mv0 gray'>{format(note.date)}</p>
                </Link>
              )
            })}
          </Section>
          <div className='pv2' />
        </Container>
      </Outer>
    </div>
  )
})
