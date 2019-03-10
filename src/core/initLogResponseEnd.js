const ms = require('ms')
const logger = require('../utils/logger')

module.exports = app => {
  app.use((req, res, next) => {
    logger.info({
      id: req.id,
      executionTime: ms(Date.now() - req.startAt),
      status: res.statusCode
    })
    next()
  })
}
