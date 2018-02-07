import React from 'react'
import { connect } from '@picostate/react'

export default connect(state => ({
  projects: state.home.projects
}))(
  function Projects (props) {
    return (
      <div className='projects'>
        <h2 className='h6 caps track pb1'><em>Projects</em></h2>
        <ul className='mt1 f fw rel'>
          {props.projects.map(({ fields: int, sys }, i) => (
            <li key={sys.id} className='project rel'>
              <h4 className='blue rel'>
                <sup className='h6 abs left b'>↳</sup>
                {int.title}
              </h4>
              <p className='h6 mt0 rel'>{int.caption}</p>
              <a href={int.url} target='_blank' className='abs fill z1' />
            </li>
          ))}
        </ul>
      </div>
    )
  }
)
