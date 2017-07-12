const React = require('react')
const { renderToString } = require('react-dom/server')
const { StaticRouter: Router } = require('react-router')
const Helmet = require('react-helmet').default

const html = require('./html.js')
const App = require('../app/App.js').default
const { Tap, createStore } = require('react-hydrate')
const asyncRender = require('react-hydrate/server')
const { getCSS } = require('micro-grid')

module.exports = (req, res) => {
  const ctx = {}
  const store = createStore({})

  const Root = (
    <Router location={req.url} context={ctx}>
      <Tap hydrate={store}>
        <App />
      </Tap>
    </Router>
  )

  asyncRender(Root).then(() => {
    const state = store.getState()
    const content = renderToString(Root)

    if (ctx.url) {
      res.writeHead(302, {
        Location: ctx.url
      })
      res.end()
    } else {
      const head = Helmet.renderStatic()
      res.send(html(content, state, getCSS(), head))
      res.end()
      store.clearState()
    }
  })
}
