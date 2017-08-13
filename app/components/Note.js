import React from 'react'
import { hydrate } from 'react-hydrate'
import api from 'Util/api'
import Head from 'react-helmet'
import Header from 'Components/Header'
import { Outer, Container } from 'Components/Layout'

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
      <Header />
      <Outer>
        <Container>
          <h1>{post.title}</h1>
        </Container>
      </Outer>
    </div>
  )
})
