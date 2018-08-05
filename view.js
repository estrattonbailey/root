const hx = require('nanohtml')
const raw = require('nanohtml/raw')
const meta = require('html-meta-tags')
const marked = require('marked')
const cxs = require('cxs')
const cx = require('nanoclass')

const { blue, track } = require('./styles.js')

const Outer = require('./components/Outer.js')
const Section = require('./components/Section.js')
const Internets = require('./components/Internets.js')
const Projects = require('./components/Projects.js')

module.exports = function (data) {
  const body = hx`
    ${Section(
      Outer(
        hx`
          <h1 class='${cx([
            's3 mb1 caps',
            track
          ])}'>Eric Bailey</h1>
          <div class='${cx([
            'mono',
            cxs({ maxWidth: '650px' })
          ])}'>
            ${raw(marked(data.fields.bio))}
          </div>
        `
      )
    )}
    ${Section(
      Outer(
        Internets(data.fields.internets)
      )
    )}
    ${Section(
      Outer(
        Projects(data.fields.projects)
      )
    )}
  `

  return hx`
    <html>
      <head>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="shortcut icon" href="/favicon.png">
        <title>estrattonbailey</title>
        ${raw(meta({
          description: data.fields.metaDescription
        }))}
        <link rel='stylesheet' href='https://unpkg.com/svbstrate@4.1.0/dist/svbstrate.css' />
        <style>
          html, body {
            font-size: 120%;
            color: #223355;
          }
          .mono {
            font-family: monospace;
          }
          ::selection {
            background: #4488FF;
            color: #fff;
          }
          ::-moz-selection {
            background: #4488FF;
            color: #fff;
          }
          a:hover {
            color: #4488FF
          }
        </style>
        <style>${cxs.css()}</style>

        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-40494652-14', 'auto');
          ga('send', 'pageview');
        </script>
      </head>
      <body>
        ${body}
      </body>
      <script>
        [].slice.call(document.getElementsByTagName('a')).forEach(function (a) {
          a.setAttribute('target', '_blank')
        })
      </script>
    </html>
  `
}
