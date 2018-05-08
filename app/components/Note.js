import React from 'react'
import { withRouter } from '@foil/react'
import { connect } from '@picostate/react'
import differenceInDays from 'date-fns/difference_in_days'
import Header from 'components/Header.js'

export default withRouter(connect((state, props) => ({
  note: state.notes.filter(n => n.fields.slug === props.router.params.slug)[0]
}))(
  function Note ({ note, router }) {
    return note ? (
      <React.Fragment>
        <Header
          title={note.fields.title}
          subtitle={`${differenceInDays(new Date(), new Date(note.fields.date))} days ago`} />
        <article className='rte' dangerouslySetInnerHTML={{
          __html: note.fields.body
        }} />
      </React.Fragment>
    ) : null
  }
))
