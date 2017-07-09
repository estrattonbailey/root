import React from 'react'
import Section from 'Components/Section'
import Projects from 'Components/Projects'
import { Outer, Container } from 'Components/Layout'
import Header from 'Components/Header'
import Head from 'react-helmet'

export default props => (
  <div>
    <Head>
      <title>{`@estrattonbailey/oss`}</title>
      <meta property='og:title' content='OSS by estrattonbailey' />
      <meta name='twitter:title' content='OSS by estrattonbailey' />
      <meta name='description' content={'Made with ❤️ in Brooklyn.'} />
      <meta property='og:description' content={'Made with ❤️ in Brooklyn.'} />
      <meta name='twitter:description' content={'Made with ❤️ in Brooklyn.'} />
    </Head>

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
