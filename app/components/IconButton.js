import React from 'react'

import icons from 'Icons'

export default ({ href, icon }) => {
  const SVG = icons[icon]

  return (
    <a href={href} target='_blank' className='icon-button px05 focus block rel'>
      <SVG className='abs fill mxa' />
    </a>
  )
}
