import React from 'react'
import { connect } from '@picostate/react'

export default connect(state => ({
  location: state.location
}))(
  function Link ({ href, children, hydrate, ...props }) {
    return (
      <a href={href} {...props} onClick={e => {
        e.preventDefault()
        hydrate({ location: href })()
      }}>{children}</a>
    )
  }
)
