import React from 'react'
import { connect } from '@picostate/react'

export default connect(state => ({
  internets: state.home.internets
}))(
  function Internets (props) {
    return (
      <div className='internets'>
        <h2 className='h6 caps track pb1'><em>Internets</em></h2>
        <ul className='mt1 f fw'>
          {props.internets.map(({ fields: int, sys }, i) => (
            <li key={sys.id} className='internet rel'>
              <h3 className='rel mb025'>
                <sup className='h6 abs left b'>↳</sup>
                {int.title}
              </h3>
              <p className='h6 mt0 f aic rel' style={{ marginTop: '-3px' }}>
                <span className='blue'>@ {int.company}</span>
                <span className='mx05'>-</span>
                <span className='i'>{int.launchDate}</span>
              </p>
              <a href={int.url} target='_blank' className='abs fill z1' />
            </li>
          ))}
        </ul>
      </div>
    )
  }
)
