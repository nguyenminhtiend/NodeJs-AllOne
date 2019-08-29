const moment = require('moment-timezone');
const uuidv4 = require('uuid/v4');
const { logging } = require('config');
const logger = require('../utils/logger');

module.exports = (app) => {
  app.use((req, res, next) => {
    if (logging.request) {
      req.id = uuidv4();
      req.startAt = new Date();
      logger.info({
        id: req.id,
        datetime: moment().format('YYYY-MM-DD HH:mm:ss Z'),
        url: req.url,
        method: req.method,
        query: req.query
      });
    }
    next();
  });
};
