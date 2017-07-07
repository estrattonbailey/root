import React from 'react'
import Link from 'react-hydrate-link'
import { Outer, Container } from 'Components/Layout'
import { Flex } from 'micro-grid'
import Project from 'Components/Project'

export default ({ projects }) => projects ? (
  <div className='bg-black white'>
    <Outer>
      <Container>
        <div className='f aie jcb mt1'>
          <h3 className='mv0'>Related Projects</h3>
          <Link to='/oss' className='h6 b caps'>See all ▶︎</Link>
        </div>

        <hr className='mv2' />

        <Flex gutter={1.5} wrap>
          {projects.map(i => (
            <Project {...i} key={i.url} />
          ))}
        </Flex>
      </Container>
    </Outer>
  </div>
) : null
