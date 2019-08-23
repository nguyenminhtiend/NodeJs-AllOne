const ms = require('ms');
const { logging } = require('config');
const logger = require('../utils/logger');

module.exports = (app) => {
  app.use((req, res, next) => {
    if (logging.response) {
      logger.info({
        id: req.id,
        executionTime: ms(Date.now() - req.startAt),
        status: res.statusCode
      });
    }
    next();
  });
};
