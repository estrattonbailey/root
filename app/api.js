import fetch from 'cross-fetch'

export function getHome () {
  return fetch(URL + '/api/home') // eslint-disable-line no-undef
    .then(res => res.json())
}

export function getNotes () {
  return fetch(URL + '/api/notes') // eslint-disable-line no-undef
    .then(res => res.json())
}

export function getNote (slug) {
  return fetch(URL + '/api/notes/' + slug) // eslint-disable-line no-undef
    .then(res => res.json())
}
