import React from 'react'
import Link from 'react-hydrate-link'
import { Outer, Container } from 'Components/Layout'
import IconButtons from 'Components/IconButtons'

export default props => (
  <footer className='bg-black white pv1'>
    <Outer>
      <Container>
        <div className='pv1 f aic jcb'>
          <Link to='/'><h2 className='h5 mv0'>estrattonbailey</h2></Link>
          <IconButtons />
        </div>
      </Container>
    </Outer>
  </footer>
)
