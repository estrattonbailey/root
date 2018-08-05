require('now-env')

const {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ACCESS_TOKEN
} = process.env

const api = require('contentful').createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN
})

module.exports = {
  getRoot () {
    return api.getEntries({
      content_type: 'root'
    }).then(({ items }) => items[0])
  }
}
