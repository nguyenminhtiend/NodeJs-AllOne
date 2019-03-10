const express = require('express')
const { index } = require('./AppController')
const { asyncRoute } = require('../utils')

module.exports = function (app) {
  const router = express.Router()

  router.get('/', asyncRoute(index))

  app.use('/', router)
}
