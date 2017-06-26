import React from 'react'
import { Flex } from 'micro-grid'
import Internet from 'Components/Internet'
import prismic from 'Util/prismic'

import { hydrate } from 'react-hydrate'

const Internets = ({ internets }) => {
  return (
    <Flex gutter={1.5} wrap>
      {internets && internets.map(i => (
        <Internet {...i} key={i.url.value.url} />
      ))}
    </Flex>
  )
}

export default hydrate(
  props => prismic((api, ctx) => {
    return api.query(
      ctx.Predicates.at('document.type', 'website'),
      { orderings: '[my.website.date desc]' }
    ).then(websites => ({
      internets: websites.results.map(res => res.rawJSON.website)
    })).catch(err => console.error(err))
  }),
  state => ({
    internets: state.internets
  })
)(Internets)
