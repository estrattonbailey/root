import React from 'react'
import { Outer, Container } from 'Components/Layout'
import Header from 'Components/Header'
import Section from 'Components/Section'
import { hydrate } from 'react-hydrate'

import api from 'Util/api'

export default hydrate(
  (props, state) => {
    const slug = props.match.params.slug

    return api.getEntries({
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
  },
  (state, props) => {
    const slug = props.match.params.slug

    const data = state[slug]

    if (!data) return false

    return {
      data
    }
  }
)(
  ({ loading, data }) => {
    return (
      <Outer>
        <Container>
          <Header />
          {loading ? (
            <h5>Loading...</h5>
          ) : (
            <Section title={data.title}>
              <div dangerouslySetInnerHTML={{
                __html: data.readme
              }} />
            </Section>
          )}
        </Container>
      </Outer>
    )
  }
)
