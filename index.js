require('now-env')
const app = require('connect')()
const router = require('router')()
const url = require('url')
const cache = require('memory-cache')
const ms = require('ms')

const view = require('./view.js')
const api = require('./api.js')

const { NODE_ENV } = process.env

app.use(require('helmet')())
app.use(require('compression')())
app.use(require('serve-static')('public'))

function done (res, str) {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.write(str)
  res.end()
}

router.get('*', (req, res) => {
  const { query } = url.parse(req.url)
  const hit = cache.get('root')

  if (hit && query !== 'clear') {
    done(res, hit)
  } else {
    api.getRoot().then(data => {
      const html = view(data).toString()
      cache.put('root', html, ms('1d'))
      done(res, html)
    })
  }
})

app.use(router)

app.listen(3000, () => console.log(`listening on 3000`))
