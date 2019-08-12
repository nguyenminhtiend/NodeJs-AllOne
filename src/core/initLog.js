const moment = require('moment-timezone');
const uuidv4 = require('uuid/v4');
const logger = require('../utils/logger');

module.exports = (app) => {
  app.use((req, res, next) => {
    req.id = uuidv4();
    req.startAt = new Date();
    logger.info({
      id: req.id,
      datetime: moment().format('YYYY-MM-DD HH:mm:ss Z'),
      url: req.url,
      method: req.method,
      query: req.query,
      body: ((body) => {
        const filteredBody = {
          ...body
        };
        return filteredBody;
      })(req.body)
    });
    next();
  });
};
