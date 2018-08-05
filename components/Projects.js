const hx = require('nanohtml')
const cxs = require('cxs')
const cx = require('nanoclass')
const { blue, track } = require('../styles.js')

function Project (i) {
  return hx`
    <li class='${cx([
      'my1 pr1',
      cxs({
        '@media (min-width: 400px)': {
          width: '50%'
        },
        '@media (min-width: 800px)': {
          width: '25%'
        }
      })
    ])}'>
      <h3 class='${cx([
        's5',
        cxs({
          fontWeight: '100'
        })
      ])}'><a href='${i.fields.url}'>${i.fields.title}</a></h3>
      <p class='${cx(['my0'])}'><small>
        ${i.fields.caption}
      </small></p>
    </li>
  `
}

module.exports = function Projects (ints) {
  return hx`
    <h2 class='${cx([
      's5 caps',
      track,
      cxs({
        marginBottom: '1em',
        '@media (min-width: 800px)': {
          marginBottom: '2em',
        }
      })
    ])}'>Open Source</h2>

    <ul class='${cx([
      'fw jcb mono',
      cxs({
        '@media (min-width: 800px)': {
          display: 'flex'
        }
      })
    ])}'>
      ${ints.map(i => {
        return Project(i)
      })}
    </ul>
  `
}
