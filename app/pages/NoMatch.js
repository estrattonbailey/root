import React from 'react'
import HeaderLite from 'Components/HeaderLite'
import ProjectHeroTitle from 'Components/ProjectHeroTitle'

export default props => (
  <section className='hero f aic'>
    <HeaderLite path='404' className='abs left top right' />

    <ProjectHeroTitle
      title='Dun dun dun'
      caption='Looks like you found a bad link. Mind <a href="https://github.com/estrattonbailey/root/issues/new?title=I%20found%20a%20404%20on%20your%20site" target="_blank" class="grade-under">letting me know?</a>'
      url='/'
      internal
      cta='Back to Homepage' />
  </section>
)
