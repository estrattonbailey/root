import React from 'react'
import Section from 'Components/Section'
import { hydrate } from 'react-hydrate'
import api from 'Util/api'

import Markdown from 'Components/Markdown'

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
  ({ loading, data, ...props }) => {
    return (
      <div>
        {loading ? (
          <h5>Loading...</h5>
        ) : (
          <Section title={data.title}>
            <Markdown string={data.readme} />
          </Section>
        )}
      </div>
    )
  }
)
