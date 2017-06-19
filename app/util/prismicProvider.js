import React from 'react'
import Prismic from 'prismic.io'

export default Comp => props => <Comp prismic={cb => Prismic.api('https://fakenyc.prismic.io/api').then(cb)} {...props} />
