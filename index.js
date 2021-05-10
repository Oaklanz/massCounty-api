const express = require('express')

const counties = require('./counties.js')

const app = express()

app.use(express.static('public'))

app.set('view engine', 'pug')

app.get('/', (request, response) => {
  return response.render('index', { counties })
})

app.all('*', (request, response) => {
  return response.sendstatus(404)
})

app.listen(1555, () => {
  console.log('listening on port 1555...')// eslint-disable-line no-console
})
