import React from 'react'
import marked from 'marked'
// import prism from 'prismjs'

export default class Markdown extends React.PureComponent {
  // componentDidMount () {
  //   prism.highlightAll()
  // }

  // componentDidUpdate () {
  //   prism.highlightAll()
  // }

  render () {
    return (
      <div className='karla markdown' dangerouslySetInnerHTML={{
        __html: marked(this.props.string || '')
      }} />
    )
  }
}
