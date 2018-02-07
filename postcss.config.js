const PROD = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-cssnext'),
    require('postcss-discard-comments'),
    PROD && require('cssnano')
  ].filter(Boolean)
}
