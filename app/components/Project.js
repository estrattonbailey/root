import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from 'micro-grid'

export default ({ title, description, url }) => (
  <Box width={[
    [1],
    [600, 1 / 2],
    [1050, 1 / 4]
  ]}>
    <div className='project mb2'>
      <Link to={url.value.url} target='_blank'>
        <h5 className='mv0'>{title.value[0].text}</h5>
      </Link>
      <p className='mv0 mt025'>{description.value[0].text}</p>
    </div>
  </Box>
)
