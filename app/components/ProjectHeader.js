import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'Components/Layout'

const ProjectHeader = ({ path }) => {
  return (
    <div className='abs top left right'>
      <div className='ph2 pt2'>
        <Container>
          <header className='header--project mt2'>
            <div className='f'>
              <Link to='/' className='__text'>
                <h2 className='h4 mv0'>estrattonbailey</h2>
              </Link>
              <span className='h4 mh05 __text'>/</span>
              <h3 className='h4 mv0 __text'>{path}</h3>
            </div>
          </header>
        </Container>
      </div>
    </div>
  )
}

export default ProjectHeader
