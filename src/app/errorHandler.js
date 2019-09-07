const { ValidationError } = require('sequelize');
const { logging } = require('config');
const { AppError } = require('../utils');
const logger = require('../utils/logger');

// eslint-disable-next-line
module.exports = (err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.code).json({
      message: err.message,
      errors: err.errors
    });
  }
  if (err instanceof ValidationError) {
    const errors = {};
    err.errors.forEach((e) => {
      let { path } = e;
      const indexOfUnderscore = path.indexOf('_');
      if (indexOfUnderscore >= 0) {
        path = path.substr(0, indexOfUnderscore);
      }
      errors[path] = e.message;
    });

    return res.status(400).json({
      message: 'One ore more input are invalid.',
      errors
    });
  }
  if (logging.error) {
    logger.error(err.stack);
  }
  return res.status(500).json({ error: err.message });
};
