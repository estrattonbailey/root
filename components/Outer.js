const hx = require('nanohtml')
const cxs = require('cxs')

module.exports = function Outer (children) {
  return hx`
    <div class='${cxs({
      padding: '0 1.5em',
      '@media (min-width: 800px)': {
        padding: '0 3.5em',
      }
    })}'>
      <div class='${cxs({
        maxWidth: '1200px',
        margin: 'auto'
      })}'>
        ${children}
      </div>
    </div>
  `
}
