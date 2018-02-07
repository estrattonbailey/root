const router = require('router')()
const cache = require('./cache.js')

router.get('/home', (req, res) => {
  const data = cache.state
  res.writeHead(200, {
    'Content-Type': 'application/json'
  })
  res.write(JSON.stringify({
    meta: data.meta,
    projects: data.projects,
    internets: data.internets
  }))
  res.end()
})

router.get('/notes/:slug', (req, res) => {
  const data = cache.state
  const { slug } = req.params
  const match = data.notes.filter(n => (
    n.fields.slug === slug
  ))[0]
  res.writeHead(200, {
    'Content-Type': 'application/json'
  })
  res.write(JSON.stringify(match))
  res.end()
})

router.get('/notes', (req, res) => {
  const data = cache.state
  res.writeHead(200, {
    'Content-Type': 'application/json'
  })
  res.write(JSON.stringify(data.notes))
  res.end()
})

module.exports = router
