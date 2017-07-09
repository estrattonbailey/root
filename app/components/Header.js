import React from 'react'
import IconButtons from 'Components/IconButtons'
import { hydrate } from 'react-hydrate'
import api from 'Util/api'
import Link from 'react-hydrate-link'
import { Outer, Container } from 'Components/Layout'

const Header = ({ loading, bio }) => {
  return (
    <div className='pt2'>
      <Outer>
        <Container>
          <header className='header mt2'>
            <h2 className='h4 mv0 inline-block'><Link to='/'>estrattonbailey</Link></h2>
            <p className='mt025 mb025'>{loading ? 'Loading bio...' : bio}</p>
            <IconButtons />

            <hr className='mt1' />
          </header>
        </Container>
      </Outer>
    </div>
  )
}

export default hydrate(
  props => {
    return api.getEntries({
      content_type: 'homepage'
    }).then(({ items }) => {
      return {
        bio: items[0].fields.bio
      }
    }).catch(err => console.error('Header', err))
  },
  state => ({
    bio: state.bio
  })
)(Header)
