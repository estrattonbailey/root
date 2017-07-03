import React from 'react'
import { Outer, Container } from 'Components/Layout'
import { Flex } from 'micro-grid'
import Project from 'Components/Project'

export default ({ projects }) => projects ? (
  <Container>
    <Flex gutter={1.5} wrap>
      {projects.map(i => (
        <Project {...i} key={i.url} />
      ))}
    </Flex>
  </Container>
) : null
