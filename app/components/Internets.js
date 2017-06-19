import React from 'react'
import Prismic from 'prismic.io'
import prismicProvider from 'Util/prismicProvider'
import { Flex } from 'micro-grid'
import Internet from 'Components/Internet'

export default prismicProvider(class Internets extends React.Component {
  constructor (p) {
    super(p)

    this.state = {

    }

    p.prismic(api => {
      api.query(
        Prismic.Predicates.at('document.type', 'website'),
        {
          orderings:
          '[my.website.date desc]'
        }
      ).then(websites => {
        this.setState({
          internets: websites.results.map(res => res.rawJSON.website)
        })
      })
    })
  }

  render () {
    const { internets } = this.state

    return (
      <Flex gutter={1.5} wrap>
        {internets && internets.map(i => (
          <Internet {...i} key={i.url.value.url} />
        ))}
      </Flex>
    )
  }
})
