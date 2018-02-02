const express = require('express')
const compression = require('compression')

const app = express()
const router = require('./router.js')

app.use(compression())
app.use(express.static('public'))

app.post('/dump', (req, res) => {
  require('./lib/cache.js').clear()
  res.status(200).send('Success!')
})

app.use(router)

app.listen(8080, () => console.log('Listening on port 8080'))
