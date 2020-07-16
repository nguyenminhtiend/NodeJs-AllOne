const ms = require('ms');
const logger = require('../utils/logger');

const { LOGGING_RESPONSE } = process.env;

module.exports = (app) => {
  if (LOGGING_RESPONSE) {
    app.use((req, res, next) => {
      logger.info(`END ${req.id} ${ms(Date.now() - req.startAt)} ${res.statusCode}`);
      next();
    });
  }
};
