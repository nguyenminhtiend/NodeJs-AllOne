const startApp = require('./core/startApp')
const express = require('express')

const app = express()
startApp(app)

module.exports = app
