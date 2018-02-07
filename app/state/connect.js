import React from 'react'
import store from 'state/store.js'

export default (map = state => state) => Comp => props => {
  return <Comp {...Object.assign({}, props, map(store.state))} hydrate={store.hydrate} />
}
