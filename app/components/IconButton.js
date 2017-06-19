import React from 'react'
import { Link } from 'react-router-dom'

import icons from 'Icons'

export default ({ to, icon }) => {
  const SVG = icons[icon]

  return (
    <Link to={to} className='icon-button px05 focus block relative'>
      <SVG className='absolute fit-x mxa' />
    </Link>
  )
}
