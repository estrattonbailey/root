import React from 'react'
import { connect } from '@picostate/react'
import Section from 'components/Section.js'

export default connect(state => ({
  projects: state.home.projects
}))(
  function Projects (props) {
    return (
      <Section>
        <h2 className='h6 caps track pb1'><em>Projects</em></h2>
        <ul className='mt1 f fw rel'>
          {props.projects.map(({ fields: int, sys }, i) => (
            <li key={sys.id} className='card rel'>
              <h4 className='rel'>{int.title}</h4>
              <p className='h6 mt0 rel'>{int.caption}</p>
              <a href={int.url} target='_blank' className='abs fill z1' />
            </li>
          ))}
        </ul>
      </Section>
    )
  }
)
