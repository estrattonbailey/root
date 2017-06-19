import React from 'react'
import IconButton from 'Components/IconButton'

export default props => (
  <div className='icon-buttons flex'>
    <IconButton to={'https://github.com/estrattonbailey'} icon={'Github'} />
    <IconButton to={'https://twitter.com/estrattonbailey'} icon={'Twitter'} />
    <IconButton to={'https://instagram.com/estrattonbailey'} icon={'Instagram'} />
    <IconButton to={'https://dribbble.com/estrattonbailey'} icon={'Dribbble'} />
  </div>
)
