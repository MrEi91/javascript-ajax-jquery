const express = require('express')
const bodyParser = require('body-parser')

const cors = require('cors')
const app = express()

let index = require('./routes/color')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: false
}))

app.use('/api', index)

app.listen(3000)

module.exports = app
