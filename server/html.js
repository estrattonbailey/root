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

    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-40494652-14', 'auto');
      ga('send', 'pageview');

      if (console.group !== undefined) {
        console.groupCollapsed('@estrattonbailey/root')
        console.info(\`Built with:\n
  contentful: https://www.contentful.com\n
  svbstrate: https://github.com/estrattonbailey/svbstrate\n
  react-hydrate: https://github.com/estrattonbailey/react-hydrate\n
  react-hydrate-link: https://github.com/estrattonbailey/react-hydrate-link\n
  micro-grid: https://github.com/estrattonbailey/micro-grid\n
        \`)
        console.groupEnd()
      } else {
        console.info(\`
@estrattonbailey/root\n
  Built with:\n
    contentful: https://www.contentful.com\n
    svbstrate: https://github.com/estrattonbailey/svbstrate\n
    react-hydrate: https://github.com/estrattonbailey/react-hydrate\n
    react-hydrate-link: https://github.com/estrattonbailey/react-hydrate-link\n
    micro-grid: https://github.com/estrattonbailey/micro-grid\n
        \`)
      }
    </script>

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
