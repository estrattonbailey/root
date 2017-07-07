import React from 'react'
import Section from 'Components/Section'
import Projects from 'Components/Projects'
import { Outer, Container } from 'Components/Layout'

export default props => (
  <Outer>
    <Container>
      <Section title='Open Source'>
        <Projects />
      </Section>
    </Container>
  </Outer>
)
