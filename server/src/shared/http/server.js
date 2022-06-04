const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))

app.listen(3333, () => {
  console.log(`Running in http://localhost:3333`)
})