import React from 'react'
import { Box } from 'micro-grid'

const Wrap = ({ children, url }) => url ? (
  <a href={url} target='_blank' className='internet pl1 mb2 rel block'>{children}</a>
) : (
  <div className='internet pl1 mb2 rel block'>{children}</div>
)

export default ({ title, tech, roles, url }) => (
  <Box width={[
    1,
    [600, 1 / 2],
    [1050, 1 / 3]
  ]}>
    <Wrap url={url}>
      <div className='rel'>
        <h4 className='mv0'>{title}</h4>
        <p className='mt025 mb0'>{tech}</p>
        <p className='mv0'><small><em>{roles}</em></small></p>
      </div>
    </Wrap>
  </Box>
)
