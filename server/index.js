require('now-env')
const app = require('connect')()
const router = require('router')()
const serve = require('serve-static')
const helmet = require('helmet')
const path = require('path')
const comp = require('compression')
const parser = require('body-parser')

/**
 * API
 */
const contentful = require('./contentful.js')

/**
 * Server data
 */
const cache = require('./cache.js')

/**
 * Markup
 */
const { head, foot } = require('./html.js')

/**
 * App
 */
const React = require('react')
const { renderToNodeStream } = require('react-dom/server')
const { Provider } = require('@picostate/react')
const foil = require('app/router.js').default
const store = require('state/store').default
const App = require('app/App.js').default

/**
 * Server
 */
const PORT = process.env.PORT || 3000
// const { NODE_ENV } = process.env

app.use(helmet())
app.use(parser.json())
app.use(comp())
app.use(serve(path.join(__dirname, '../public')))

router.get('*', (req, res) => {
  foil.resolve(req.originalUrl, ({ payload, context, redirect }) => {
    const load = ctx => Promise.resolve(payload.load ? payload.load(ctx) : true)

    store.hydrate({ router: context })

    const title = 'Eric Bailey'

    load(context).then(() => {
      const { Component } = payload

      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      res.write(head({
        title
      }))
      const stream = renderToNodeStream((
        <Provider store={store}>
          <App>
            <Component />
          </App>
        </Provider>
      ))
      stream.pipe(res, { end: false })
      stream.on('end', () => {
        res.write(foot({
          state: store.state
        }))
        res.end()
      })
    }).catch(e => {
      console.error(e)
      res.statusCode = 500
      res.write('Internal server error')
      res.end()
    })
  })
})

app.use('/api', require('./api.js'))
app.use(router)

contentful.bootstrap().then(() => {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
})
