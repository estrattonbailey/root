import Prismic from 'prismic.io'

export default cb => Prismic.api('https://fakenyc.prismic.io/api').then(api => cb(api, Prismic))
