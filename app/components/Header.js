import React from 'react'
import IconButtons from 'Components/IconButtons'
import { hydrate } from 'react-hydrate'
import api from 'Util/api'
import { Link } from 'react-router-dom'
import { Outer, Container } from 'Components/Layout'

const Header = ({ loading, bio }) => {
  return (
    <Outer>
      <Container>
        <header className='header'>
          <Link to='/'><h2 className='h4 mv0'>estrattonbailey</h2></Link>
          <p className='mt025 mb025'>{loading ? 'Loading bio...' : bio}</p>
          <div className='mhn05'>
            <IconButtons />
          </div>

          <hr className='mt1' />
        </header>
      </Container>
    </Outer>
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
