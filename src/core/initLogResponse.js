const ms = require('ms');
const { logging } = require('config');
const logger = require('../utils/logger');

module.exports = (app) => {
  if (logging.response) {
    app.use((req, res, next) => {
      logger.info({
        id: req.id,
        executionTime: ms(Date.now() - req.startAt),
        status: res.statusCode
      });
      next();
    });
  }
};
