import React from 'react'
import Link from 'react-hydrate-link'
import { Outer, Container } from 'Components/Layout'
import { Flex } from 'micro-grid'
import Project from 'Components/Project'

export default ({ projects }) => projects.length > 0 ? (
  <div className='bg-black white pv2'>
    <Outer>
      <Container>
        <div className='f fw aie jcb mt1'>
          <h3 className='mv0 mr2'>Related Libraries</h3>
          <Link to='/oss' className='h6 b caps mb025'>See all ▶︎</Link>
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
