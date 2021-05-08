const express = require('express')
const bodyParser = require('body-parser')
const counties = require('./counties.js')
const { getAllCounties, getByString, saveNewCounty } = require('./controller/counties')


const app = express()

app.get('/', getAllCounties)

app.get('/counties/:searchString', getByString)


app.post('/counties', bodyParser.json(), saveNewCounty)



app.listen(1555, () => {
  console.log('listening on port 1555...')// eslint-disable-line no-console
})
