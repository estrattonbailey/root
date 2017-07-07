import React from 'react'
import { Outer, Container } from 'Components/Layout'

export default ({ title, caption, version, size }) => {
  return (
    <div className='fill-h'>
      <Outer>
        <Container>
          <div className='hero__title inline-block'>
            <hr className='mb1' />
            <h1 className='mv0'>{title}</h1>
            <p className='mt075 mb05 i'>
              <strong>{version}</strong>
              <span className='mh05'>-</span>
              <span>{size}</span>
            </p>
            <p className='mv0 s4'>{caption}</p>
          </div>

        </Container>
      </Outer>
    </div>
  )
}
