const { ValidationError } = require('sequelize');
const AppError = require('./AppError');

// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  if (err instanceof SyntaxError) {
    return res.status(400).json({
      error: 'Invalid JSON body.'
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
  if (err instanceof AppError) {
    return res.status(err.code).json({
      message: err.message,
      errors: err.errors
    });
  }
  return res.status(500).json({ error: err.message });
};
