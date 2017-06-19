import React from 'react'
import Prismic from 'prismic.io'
import Loading from 'Components/Loading'

export default (createQuery, mapDataToProps, Loader = Loading) => Comp => {
  return class PrismicProvider extends React.Component {
    constructor (props) {
      super(props)

      this.state = {
        loading: true
      }

      Prismic.api('https://fakenyc.prismic.io/api')
        .then(api => {
          createQuery(api, Prismic).then(data => {
            this.setState({
              loading: false,
              data: mapDataToProps(data)
            })
          })
        })
    }

    render () {
      const { loading, data } = this.state
      return Loader && loading ? (
        <Loading />
      ) : (
        <Comp {...this.props} {...{
          loading,
          data
        }} />
      )
    }
  }
}

/*
 *
import React from 'react'
import prismicProvider from 'Util/prismic'
import { Flex } from 'micro-grid'
import Project from 'Components/Project'

export default prismicProvider(
  (api, prismic) => {
    return api.query(
      prismic.Predicates.at('document.type', 'project'),
      {
        orderings: '[my.project.order desc]',
        pageSize: 100
      }
    )
  },
  data => {
    return data.results.map(res => res.rawJSON.project)
  }
)(({ loading, data }) => {
  console.log(loading, data)

  return (
    <Flex gutter={1.5} wrap>
      {data && data.map(i => (
        <Project {...i} key={i.url.value.url} />
      ))}
    </Flex>
  )
})
*/
