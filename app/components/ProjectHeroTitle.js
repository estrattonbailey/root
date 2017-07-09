import React from 'react'
import { Outer, Container } from 'Components/Layout'
import icons from 'Icons'
import Link from 'react-hydrate-link'

const Github = icons.Github

export default ({ title, caption, version, size, url, cta = 'Source', internal }) => {
  return (
    <div className='fill-h'>
      <Outer>
        <Container>
          <div className='hero__title inline-block'>
            <hr className='mb1' />
            <h1 className='mv0'>{title}</h1>
            <p className='mv075 s4' dangerouslySetInnerHTML={{
              __html: caption
            }} />

            <div className='f aic mt1'>
              {internal ? (
                <Link to={url} className='button mr2' role='button'>
                  <div className='f aic'>
                    <Github /><span className='ml1 mb025'>{cta}</span>
                  </div>
                </Link>
              ) : (
                <a href={url} target='_blank' className='button mr2' role='button'>
                  <div className='f aic'>
                    <Github /><span className='ml1 mb025'>{cta}</span>
                  </div>
                </a>
              )}
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
