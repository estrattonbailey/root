import React from 'react'
import Section from 'Components/Section'
import Internets from 'Components/Internets'
import Projects from 'Components/Projects'
import { Flex } from 'ffx'
import Internet from 'Components/Internet'
import { Outer, Container } from 'Components/Layout'
import Header from 'Components/Header'

export default props => (
  <div>
    <Header />

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
              tech: 'React, GraphQL, Node.js, Shopify',
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
  </div>
)
