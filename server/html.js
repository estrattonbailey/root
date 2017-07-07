module.exports = (content, state, css, head) =>
`<html>
  <head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

    <link rel="icon" href="/favicon.png" type="image/png"></link>

    <link href="/public/main.css" rel="stylesheet" type="text/css"></link>

    <style id="grid-style">${css}</style>

    ${head.meta.toString()}
    ${head.title.toString()}
  </head>
  <body>
    <div id="root">${content}</div>
    <script>
      window.__state = ${JSON.stringify(state)}
    </script>
    <script src="/public/index.js"></script>
  </body>
</html>
`
