const head = ({ meta, title }) => `<!doctype html>
  <html>
    <head>
      <meta charset="utf-8"/>
      <title>${title}</title>
      <link rel='stylesheet' href='/main.css' />
    </head>
    <body>
      <div id='root'>
`

const foot = ({ state }) => `</div>
      <script src='/index.js'></script>
      <script>
        window.__hydrate__ = ${JSON.stringify(state)}
      </script>
    </body>
  </html>
`

module.exports = {
  head,
  foot
}
