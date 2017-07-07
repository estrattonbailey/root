import React from 'react'
import IconButton from 'Components/IconButton'

export default ({ children, projectURL }) => {
  return (
    <section className='hero f aic' style={{
      backgroundImage: `linear-gradient(-90deg, #47EAFF, #47FFA6)`
    }}>
      <div className='abs top right px2'>
        <IconButton href={projectURL} icon='Github' />
      </div>
      {children}
    </section>
  )
}
