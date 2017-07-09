import React from 'react'
import ProjectHeader from 'Components/ProjectHeader'
import ProjectHeroTitle from 'Components/ProjectHeroTitle'

export default props => (
  <section className='hero f aic'>
    <ProjectHeader path='404' />

    <ProjectHeroTitle
      title='Dun dun dun'
      caption='Looks like you found a bad link. Mind <a href="https://github.com/estrattonbailey/root/issues/new?title=I%20found%20a%20404%20on%20your%20site" target="_blank" class="grade-under">letting me know?</a>'
      url='/'
      internal={true}
      cta='Back to Homepage' />
  </section>
)
