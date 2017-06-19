import React from 'react'
import prismicProvider from 'Util/prismicProvider'
import get from 'lodash/get'
import IconButtons from 'Components/IconButtons'

import prismic from 'Util/prismic'
import { hydrate } from 'react-hydrate'

export default hydrate(
  props => prismic((api, ctx) => {
    return api.getSingle('homepage').then(({ rawJSON }) => {
      return {
        bio: get(rawJSON, 'homepage.bio.value[0].text')
      }
    }).catch(err => console.error(err))
  }),
  state => ({
    bio: state.bio
  })
)(({ loading, bio }) => {
  return (
    <header className='header'>
      <h2 className='h4 mv0'>estrattonbailey</h2>
      <p className='mt025 mb025'>{loading ? 'Loading bio...' : bio}</p>
      <div className='mhn05'>
        <IconButtons />
      </div>

      <hr className='mt1' />
    </header>
  )
})
