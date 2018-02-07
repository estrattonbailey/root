import React from 'react'
import { connect } from '@picostate/react'
import differenceInDays from 'date-fns/difference_in_days'

import Link from 'components/Link.js'

export default connect(state => ({
  notes: state.notes
}))(
  function Notes (props) {
    return (
      <div>
        <ul className='mt1 f fw x'>
          {props.notes.sort(
            (a, b) => a.fields.date < b.fields.date
          ).map(({ fields: note, sys }) => (
            <li key={sys.id} className='note rel block x'>
              <h3 className='rel mb0'>
                <sup className='h6 abs left b'>↳</sup>
                {note.title}
              </h3>
              <p className='h5 my075'>{note.teaser}</p>
              <p className='h6 mt025'>{differenceInDays(new Date(), new Date(note.date))} days ago</p>
              <Link href={`/notes/${note.slug}`} className='abs fill z1' />
            </li>
          ))}
        </ul>
      </div>
    )
  }
)
