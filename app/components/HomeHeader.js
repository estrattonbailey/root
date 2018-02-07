import React from 'react'
import { connect } from '@picostate/react'

export default connect(state => ({
  data: state.home.meta
}))(
  function HomeHeader ({ data }) {
    return (
      <div className='header'>
        <h1>Eric Bailey</h1>
        <p className='h2 mt05 mb075'>{data.fields.bio}</p>
        <div className='f aic'>
          <a href='https://github.com/estrattonbailey' target='_blank' className='f aic b mr1'>
            <span className='black mr05'>↳</span>GitHub
          </a>
          <a href='https://twitter.com/estrattonbailey' target='_blank' className='f aic b'>
            <span className='black mr05'>↳</span>Twitter
          </a>
        </div>
      </div>
    )
  }
)
