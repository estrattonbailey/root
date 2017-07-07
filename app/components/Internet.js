import React from 'react'
import { Box } from 'micro-grid'

export default ({ title, tech, roles, url }) => (
  <Box width={[
    [1],
    [600, 1 / 2],
    [1050, 1 / 3]
  ]}>
    <div className='internet pl1 mb2'>
      {url ? (
        <a href={url} target='_blank'>
          <h4 className='mv0'>{title}</h4>
        </a>
      ) : (
        <h4 className='mv0'>{title}</h4>
      )}
      <p className='mv025'>{tech}</p>
      <p className='mv0'><small><em>{roles}</em></small></p>
    </div>
  </Box>
)
