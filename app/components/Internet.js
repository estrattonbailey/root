import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from 'micro-grid'

export default ({ title, description, 'sub-description': sub, url }) => (
  <Box width={[
    [1],
    [600, 1 / 2],
    [1050, 1 / 3]
  ]}>
    <div className='internet pl1 mb2'>
      <Link to={url.value.url} target='_blank'>
        <h4 className='mv0'>{title.value[0].text}</h4>
      </Link>
      <p className='mv0 mt025'>{description.value[0].text}</p>
      <p className='mv0'><small><em>{sub.value[0].text}</em></small></p>
    </div>
  </Box>
)
