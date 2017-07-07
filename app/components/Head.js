import React from 'react'
import Head from 'react-helmet'

export default ({ title, description, image, url }) => (
  <Head>
    <title>{`@estrattonbailey/${title}`}</title>

    <meta name='description' content={description} />

    <meta property='og:url' content={url} />
    <meta property='og:site_name' content='@estrattonbailey' />
    <meta property='og:type' content='website' />
    <meta property='og:title' content={title} />
    <meta property='og:description' content={description} />
    <meta property='og:image' content={image} />

    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:site' content='@estrattonbailey' />
    <meta name='twitter:url' content={url} />
    <meta name='twitter:title' content={title} />
    <meta name='twitter:description' content={description} />
    <meta name='twitter:image' content={image} />
  </Head>
)
