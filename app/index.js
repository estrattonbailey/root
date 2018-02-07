import React from 'react'
import { hydrate } from 'react-dom'
import createRouter from '@foil/react'
import { Provider } from '@picostate/react'
import App from 'app/App.js'
import router from 'app/router.js'
import store from 'state/store.js'

const Router = createRouter(render => {
  store.listen(state => {
    router.resolve(state.location, ({ payload, context }) => {
      const load = ctx => Promise.resolve(payload.load ? payload.load(ctx) : true)

      store.hydrate({ router: context })

      load(context).then(() => {
        const { Component } = payload
        window.history.pushState({}, '', state.location)
        render(Component)
      }).catch(e => console.error(e))
    })
  })
})

document.addEventListener('DOMContentLoaded', e => {
  store.hydrate(window.__hydrate__)

  const startingLocation = window.location.href.replace(window.location.origin, '')

  router.resolve(startingLocation, ({ payload, context }) => {
    const load = ctx => Promise.resolve(payload.load ? payload.load(ctx) : true)

    store.hydrate({ router: context })

    load(context).then(() => {
      const { Component } = payload

      hydrate((
        <Provider store={store}>
          <App>
            <Router>
              <Component />
            </Router>
          </App>
        </Provider>
      ), document.getElementById('root'))
    }).catch(e => console.error(e))
  })
})
