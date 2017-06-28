import React from 'react'
import { Outer, Container } from 'Components/Layout'
import Header from 'Components/Header'
import Section from 'Components/Section'
import { hydrate } from 'react-hydrate'

import api from 'Util/api'
import find from 'lodash/find'
import matchesProperty from 'lodash/matchesProperty'

export default hydrate(
  (props, state) => {
    const slug = props.match.params.slug
    const existing = find(state.projects || [], matchesProperty('slug', slug))

    return existing ? ({
      [slug]: existing
    }) : (
      api.getEntries({
        content_type: 'project',
        'fields.slug': slug
      }).then(({ items }) => {
        return {
          [slug]: items[0].fields
        }
      }).catch(err => {
        console.error(err)
        return {
          error: err
        }
      })
    )
  },
  (state, props) => {
    const slug = props.match.params.slug
    return {
      data: state[slug]
    }
  }
)(
  ({ loading, data }) => {
    console.log(loading, data)
    return (
      <Outer>
        <Container>
          <Header />
          <Section title='Title' />
        </Container>
      </Outer>
    )
  }
)
