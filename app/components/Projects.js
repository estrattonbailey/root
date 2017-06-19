import React from 'react'
import Prismic from 'prismic.io'
import prismicProvider from 'Util/prismicProvider'
import { Flex } from 'micro-grid'
import Project from 'Components/Project'

export default prismicProvider(class Internets extends React.Component {
  constructor (p) {
    super(p)

    this.state = {

    }

    p.prismic(api => {
      api.query(
        Prismic.Predicates.at('document.type', 'project'),
        {
          orderings: '[my.project.order desc]',
          pageSize: 100
        }
      ).then(projects => {
        this.setState({
          projects: projects.results.map(res => res.rawJSON.project)
        })
      })
    })
  }

  render () {
    const { projects } = this.state

    console.log(projects)

    return (
      <Flex gutter={1.5} wrap>
        {projects && projects.map(i => (
          <Project {...i} key={i.url.value.url} />
        ))}
      </Flex>
    )
  }
})
