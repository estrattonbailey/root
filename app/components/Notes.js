import React from 'react'
import { connect } from '@picostate/react'
import differenceInDays from 'date-fns/difference_in_days'
import Section from 'components/Section.js'
import { Link } from '@foil/react'

export default connect(state => ({
  notes: state.notes
}))(
  function Notes (props) {
    return (
      <Section>
        <ul className='notes mt1 f fw x'>
          {props.notes.sort(
            (a, b) => a.fields.date < b.fields.date
          ).map(({ fields: note, sys }) => (
            <li key={sys.id} className='notes__note card rel block x'>
              <p className='h6 mb1'><em>{differenceInDays(new Date(), new Date(note.date))} days ago</em></p>
              <h2 className='rel mb0'>{note.title}</h2>
              <p className='h4 mt05'>{note.teaser}</p>
              <Link href={`/notes/${note.slug}`} className='abs fill z1' />
            </li>
          ))}
        </ul>
      </Section>
    )
  }
)
