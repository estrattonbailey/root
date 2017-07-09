import React from 'react'

export default ({ children }) => {
  return (
    <section className='hero f aic' style={{
      backgroundImage: `linear-gradient(-90deg, #47EAFF, #47FFA6)`
    }}>{children}</section>
  )
}
