import React from 'react'
import prismicProvider from 'Util/prismicProvider'
import get from 'lodash/get'
import IconButtons from 'Components/IconButtons'

export default prismicProvider(class Header extends React.Component {
  constructor (p) {
    super(p)

    this.state = {}

    p.prismic(api => {
      api.getSingle('homepage').then(({ rawJSON }) => {
        this.setState({
          bio: get(rawJSON, 'homepage.bio.value[0].text')
        })
      })
    })
  }

  render () {
    const { bio } = this.state
    return (
      <header className='header'>
        <h2 className='h4 mv0'>estrattonbailey</h2>
        <p className='mt025 mb025'>{bio}</p>
        <div className='mhn05'>
          <IconButtons />
        </div>

        <hr className='mt1' />
      </header>
    )
  }
})
