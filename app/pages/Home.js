import React from 'react'
import Section from 'Components/Section'
import Internets from 'Components/Internets'
import Projects from 'Components/Projects'

export default props => (
  <div>
    <Section title='Internets'>
      <Internets />
    </Section>
    <hr />
    <Section title='Open Source'>
      <Projects />
    </Section>
  </div>
)
