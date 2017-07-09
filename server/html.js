const { stringify } = require('circular-json')

export const toString = obj => stringify(obj)
  .replace(/<\/(script)/ig, '<\\/$1')
  .replace(/<!--/g, '<\\!--')
  .replace(/\u2028/g, '\\u2028')
  .replace(/\u2029/g, '\\u2029')

module.exports = (content, state, css, head) =>
`<html>
  <head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

    <link rel="icon" href="/favicon.png" type="image/png"></link>

    <link href="/public/main.css" rel="stylesheet" type="text/css"></link>

    <style id="grid-style">${css}</style>

    <meta property='og:site_name' content='@estrattonbailey' />
    <meta property='og:type' content='website' />
    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:site' content='@estrattonbailey' />
    ${head.meta.toString()}
    ${head.title.toString()}
  </head>
  <body>
    <div id="root">${content}</div>
    <script>
      window.__state = ${toString(state)}
    </script>
    <script src="/public/index.js"></script>
  </body>
</html>
`
