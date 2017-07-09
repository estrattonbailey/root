import React from 'react'
import { Outer, Container } from 'Components/Layout'
import icons from 'Icons'

const Github = icons.Github

export default ({ title, caption, version, size, url }) => {
  return (
    <div className='fill-h'>
      <Outer>
        <Container>
          <div className='hero__title inline-block'>
            <hr className='mb1' />
            <h1 className='mv0'>{title}</h1>
            <p className='mv075 s4'>{caption}</p>

            <div className='f aic mt1'>
              <a href={url} target='_blank' className='button mr2' role='button'>
                <div className='f aic'>
                  <Github /><span className='ml1 mb025'>Source</span>
                </div>
              </a>
              {(version || size) && (
                <p className='mv0 i'>
                  {version && <strong>{version}</strong>}
                  {(version && size) && <span className='mh05'>-</span>}
                  {size && <span>{size}</span>}
                </p>
              )}
            </div>
          </div>

        </Container>
      </Outer>
    </div>
  )
}
