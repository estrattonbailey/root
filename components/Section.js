const hx = require('nanohtml')
const cxs = require('cxs')

module.exports = function Section (children) {
  return hx`
    <section class='${cxs({
      margin: '50px 0',
      '@media (min-width: 800px)': {
        margin: '80px 0'
      }
    })}'>
      ${children}
    </section>
  `
}
