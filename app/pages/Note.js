import React from 'react'
import { hydrate } from 'react-hydrate'
import api from 'Util/api'
import format from 'Util/date'
import Head from 'react-helmet'
import HeaderLite from 'Components/HeaderLite'
import { Outer, Container } from 'Components/Layout'
import Markdown from 'Components/Markdown'

const NoteHeader = ({ title, date }) => {
  return (
    <div className='pt2 s1'>
      <p className='s5 gray i'>{format(date)}</p>
      <h1 className='mt05'>{title}</h1>
    </div>
  )
}

export default hydrate(
  (props, state) => {
    return api.getEntries({
      content_type: 'note',
      'fields.slug': props.slug
    }).then(({ items }) => {
      return {
        [props.slug]: items[0].fields
      }
    }).catch(err => {
      console.error(err)
    })
  },
  (state, props) => {
    if (!state[props.slug]) return false

    return {
      [props.slug]: state[props.slug]
    }
  }
)(({ data, slug }) => {
  const post = data[slug]
  return (
    <div>
      <HeaderLite />

      <Outer>
        <Container>
          <NoteHeader {...post} />

          <div className='pt025 pb2 s1'>
            <Markdown string={post.body} />
          </div>
        </Container>
      </Outer>
    </div>
  )
})
