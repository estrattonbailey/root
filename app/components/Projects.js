import React from 'react'
import { Flex } from 'micro-grid'
import Project from 'Components/Project'
import { hydrate } from 'react-hydrate'

import api from 'Util/api'

const Projects = ({ loading, data }) => loading ? null : (
  <Flex gutter={1.5} wrap>
    {data.projects && data.projects.map(i => (
      <Project {...i} key={i.url} />
    ))}
  </Flex>
)

export default hydrate(
  props => {
    return api.getEntries({
      content_type: 'project',
      order: '-fields.order'
    }).then(({ items }) => {
      return {
        projects: items.map(item => item.fields)
      }
    }).catch(err => console.error('Projects', err))
  },
  state => ({
    projects: state.projects
  }),
  {
    ssr: false
  }
)(Projects)
