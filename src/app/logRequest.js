const moment = require('moment-timezone');
const uuidv4 = require('uuid/v4');
const { logging } = require('config');
const logger = require('../utils/logger');

module.exports = (app) => {
  if (logging.request) {
    app.use((req, res, next) => {
      req.id = uuidv4();
      req.startAt = new Date();
      logger.info(
        `START ${req.method} ${req.url} ${moment().format('YYYY-MM-DD HH:mm:ss Z')} ${req.id}`
      );
      next();
    });
  }
};