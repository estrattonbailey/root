import React from 'react'
import Link from 'react-hydrate-link'
import { Outer, Container } from 'Components/Layout'

const ProjectHeader = ({ path }) => {
  return (
    <div className='abs top left right'>
      <div className='pt2'>
        <Outer>
          <Container>
            <header className='header--project mt2'>
              <div className='f fw'>
                <Link to='/' className='__text'>
                  <h2 className='h4 mv0'>estrattonbailey</h2>
                </Link>
              </div>
            </header>
          </Container>
        </Outer>
      </div>
    </div>
  )
}

export default ProjectHeader
