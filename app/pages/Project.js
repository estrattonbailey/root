import React from 'react'
import { hydrate } from 'react-hydrate'
import api from 'Util/api'
import Markdown from 'Components/Markdown'
import RelatedProjects from 'Components/RelatedProjects'
import { Outer, Container } from 'Components/Layout'
import Head from 'react-helmet'

import ProjectHeader from 'Components/ProjectHeader'
import ProjectHero from 'Components/ProjectHero'
import ProjectHeroTitle from 'Components/ProjectHeroTitle'

export default hydrate(
  (props, state) => {
    const slug = props.slug

    return api.getEntries({
      content_type: 'project',
      'fields.slug': slug
    }).then(({ items }) => {
      return {
        [slug]: items[0].fields
      }
    }).catch(err => {
      return {
        error: err
      }
    })
  },
  (state, props) => {
    const slug = props.slug

    const data = state[slug]

    if (!data) return false

    return {
      data
    }
  }
)(
  ({ loading, data, ...props }) => {
    if (loading) return null

    const {
      readme,
      caption,
      related,
      url
    } = data

    const title = props.slug

    return (
      <div>
        <Head>
          <title>{`@estrattonbailey/${title}`}</title>
          <meta property='og:title' content={title} />
          <meta name='twitter:title' content={title} />
          <meta name='description' content={caption} />
          <meta property='og:description' content={caption} />
          <meta name='twitter:description' content={caption} />
        </Head>

        <ProjectHeader path={title} />

        <ProjectHero projectURL={url}>
          <ProjectHeroTitle {...data} />
        </ProjectHero>

        <Outer>
          <Container>
            <div className='pv2'>
              <Markdown string={readme} />
            </div>
          </Container>
        </Outer>

        {related && <RelatedProjects projects={related.filter(o => o.fields).map(o => o.fields)} />}
      </div>
    )
  }
)
