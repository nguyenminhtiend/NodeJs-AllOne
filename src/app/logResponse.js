const ms = require('ms');
const { logging } = require('config');
const logger = require('../utils/logger');

module.exports = (app) => {
  if (logging.response) {
    app.use((req, res, next) => {
      logger.info(`END ${req.id} ${ms(Date.now() - req.startAt)} ${res.statusCode}`);
      next();
    });
  }
};
