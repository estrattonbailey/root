import React from 'react'
import { Flex } from 'micro-grid'
import Project from 'Components/Project'
import prismic from 'Util/prismic'
import { hydrate } from 'react-hydrate'

const Projects = ({ projects }) => (
  <Flex gutter={1.5} wrap>
    {projects && projects.map(i => (
      <Project {...i} key={i.url.value.url} />
    ))}
  </Flex>
)

export default hydrate(
  props => prismic((api, ctx) => {
    return api.query(
      ctx.Predicates.at('document.type', 'project'),
      {
        orderings: '[my.project.order desc]',
        pageSize: 100
      }
    ).then(projects => {
      return {
        projects: projects.results.map(res => res.rawJSON.project)
      }
    })
  }),
  state => ({
    projects: state.projects
  })
)(Projects)
