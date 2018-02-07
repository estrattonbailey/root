import React from 'react'
import { connect } from '@picostate/react'
import differenceInDays from 'date-fns/difference_in_days'
import Header from 'components/Header.js'

export default connect(state => ({
  router: state.router,
  notes: state.notes
}))(
  function Note ({ notes, router }) {
    const note = notes.filter(n => n.fields.slug === router.params.slug)[0]
    return note ? (
      <React.Fragment>
        <Header
          title={note.fields.title}
          subtitle={`Published ${differenceInDays(new Date(), new Date(note.fields.date))} days ago`} />
      </React.Fragment>
    ) : null
  }
)
