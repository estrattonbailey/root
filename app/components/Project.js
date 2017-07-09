import React from 'react'
import Link from 'react-hydrate-link'
import { Box } from 'micro-grid'
import scroller from 'scroll-restoration'

export default ({ title, caption, slug }) => (
  <Box width={[
    1,
    [600, 1 / 2],
    [1050, 1 / 4]
  ]}>
    <Link to={`/oss/${slug}`} onClick={e => {
      scroller.save()
      setTimeout(() => window.scrollTo(0, 0), 0)
    }} className='project mb2'>
      <h5 className='__title rel inline-block mv0'>{title}</h5>
      <p className='mv0 mt025'>{caption}</p>
    </Link>
  </Box>
)
