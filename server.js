const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'demos')))
// app.use(express.bodyParser())
// app.use(express.logger('short'))

app.get('/', function (req, res) {
  res.sendfile('./demos/fixed/index.html')
})

app.listen(3000)
console.log('Listening!')
