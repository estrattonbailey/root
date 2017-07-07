import React from 'react'
import { hydrate } from 'react-hydrate'
import api from 'Util/api'
import Markdown from 'Components/Markdown'
import RelatedProjects from 'Components/RelatedProjects'
import { Outer, Container } from 'Components/Layout'

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
    if (loading) return null

    const {
      readme,
      related
    } = data

    return (
      <div>
        <Outer>
          <Container>
            <div className='pv2'>
              <Markdown string={readme} />
            </div>

          </Container>
        </Outer>

        {related && <RelatedProjects projects={related.map(o => o.fields)} />}
      </div>
    )
  }
)
