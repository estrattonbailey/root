import React from 'react'
import { connect } from '@picostate/react'
import Section from 'components/Section.js'
import SectionTitle from 'components/SectionTitle.js'

export default connect(state => ({
  internets: state.home.internets
}))(
  function Internets (props) {
    return (
      <Section>
        <SectionTitle title='Internets' />

        <ul className='mt1 f fw'>
          {props.internets.map(({ fields: int, sys }, i) => (
            <li key={sys.id} className='card rel'>
              <h3 className='rel mb025'>{int.title}</h3>
              <p className='h6 mt0 f aic rel' style={{ marginTop: '-3px' }}>
                <span className='blue b'>@ {int.company}</span>
                <span className='mx05'>-</span>
                <span className='i'>{int.launchDate}</span>
              </p>
              <a href={int.url} target='_blank' className='abs fill z1' />
            </li>
          ))}
        </ul>
      </Section>
    )
  }
)
