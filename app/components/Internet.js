import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from 'micro-grid'

export default ({ title, tech, roles, url }) => (
  <Box width={[
    [1],
    [600, 1 / 2],
    [1050, 1 / 3]
  ]}>
    <div className='internet pl1 mb2'>
      {url ? (
        <Link to={url} onClick={e => window.scrollTo(0, 0)}>
          <h4 className='mv0'>{title}</h4>
        </Link>
      ) : (
        <h4 className='mv0'>{title}</h4>
      )}
      <p className='mv025'>{tech}</p>
      <p className='mv0'><small><em>{roles}</em></small></p>
    </div>
  </Box>
)
