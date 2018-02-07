const {
  CONT_SPACE,
  CONT_TOKEN
} = process.env

const cache = require('./cache.js')

const api = require('contentful').createClient({
  space: CONT_SPACE,
  accessToken: CONT_TOKEN
})

function getProjects () {
  return api.getEntries({
    content_type: 'project',
    limit: 999,
    select: [
      'sys.id',
      'fields.title',
      'fields.slug',
      'fields.url',
      'fields.caption',
      'fields.order'
    ].join(',')
  }).then(({ items }) => {
    cache.hydrate({ projects: items })
  }).catch(e => console.log(e))
}

function getInternets () {
  return api.getEntries({
    content_type: 'internet',
    limit: 999,
    select: [
      'sys.id',
      'fields.title',
      'fields.company',
      'fields.launchDate',
      'fields.url'
    ].join(',')
  }).then(({ items }) => {
    cache.hydrate({ internets: items })
  }).catch(e => console.log(e))
}

function getMeta () {
  return api.getEntries({
    content_type: 'homepage',
    limit: 999,
    select: [
      'sys.id',
      'fields.bio',
      'fields.openGraphImage'
    ].join(',')
  }).then(({ items }) => {
    cache.hydrate({ meta: items[0] })
  }).catch(e => console.log(e))
}

function getNotes () {
  return api.getEntries({
    content_type: 'note',
    limit: 999,
    select: [
      'sys.id',
      'fields.title',
      'fields.slug',
      'fields.date',
      'fields.teaser',
      'fields.body'
    ].join(',')
  }).then(({ items }) => {
    cache.hydrate({ notes: items })
  }).catch(e => console.log(e))
}

module.exports = {
  bootstrap () {
    return Promise.all([
      getMeta(),
      getProjects(),
      getInternets(),
      getNotes()
    ])
  }
}
