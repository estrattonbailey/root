import React from 'react'
import { hydrate } from 'react-dom'
import { Router } from '@foil/react'
import { Provider } from '@picostate/react'
import App from 'app/App.js'
import router from 'app/router.js'
import store from 'state/store.js'

document.addEventListener('DOMContentLoaded', e => {
  store.hydrate(window.__hydrate__)

  router.resolve(window.location.href.replace(window.location.origin, ''), ({ payload, context }) => {
    const load = ctx => Promise.resolve(payload.load ? payload.load(ctx) : true)

    load(context).then(() => {
      const { Component, title } = payload

      if (title) {
        document.title = title(context.params)
      }

      hydrate((
        <Provider store={store}>
          <App>
            <Router router={router} context={context} resolve={({ payload, context }, render) => {
              const load = ctx => Promise.resolve(payload.load ? payload.load(ctx) : true)

              load(context).then(() => {
                const { Component, title } = payload

                if (title) {
                  document.title = title(context.params)
                }

                render(Component)
              })
            }}>
              <Component />
            </Router>
          </App>
        </Provider>
      ), document.getElementById('root'))
    }).catch(e => console.error(e))
  })
})
