import React from 'react'
import Section from 'Components/Section'
import Internets from 'Components/Internets'
import Projects from 'Components/Projects'
import { Flex } from 'micro-grid'
import Internet from 'Components/Internet'
import { Outer, Container } from 'Components/Layout'

export default props => (
  <Outer>
    <Container>
      <Section title='Internets'>
        <Internets />
      </Section>
      <hr />
      <Section title='Open Source'>
        <Projects />
      </Section>
      <hr />
      <Section title='Résumé'>
        <Flex gutter={1.5} wrap>
          <Internet {...{
            title: 'Freelance',
            tech: 'React, GraphQL, Wordpress REST API, Node.js',
            roles: 'May 2017 - preset'
          }} />
          <Internet {...{
            title: 'Barrel',
            tech: 'Developer',
            roles: 'Jan 2015 - May 2017'
          }} />
          <Internet {...{
            title: 'Sculpt',
            tech: 'Design, Social, Photo, Dev',
            roles: 'July 2013 - Dec 2014'
          }} />
        </Flex>
      </Section>
    </Container>
  </Outer>
)
