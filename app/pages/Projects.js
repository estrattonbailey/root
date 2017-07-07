import React from 'react'
import Section from 'Components/Section'
import Projects from 'Components/Projects'
import { Outer, Container } from 'Components/Layout'
import Header from 'Components/Header'

export default props => (
  <div>
    <Header />

    <Outer>
      <Container>
        <Section title='Open Source'>
          <Projects />
        </Section>
      </Container>
    </Outer>
  </div>
)
