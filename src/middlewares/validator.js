const Joi = require('joi');

module.exports = schema => (req, res, next) => {
  const errors = {};
  ['body', 'params', 'query'].forEach((key) => {
    if (schema[key]) {
      const result = Joi.validate(req[key], schema[key], { abortEarly: false });
      if (result.error) {
        result.error.details.forEach((detail) => {
          errors[detail.context.key] = detail.message;
        });
      }
    }
  });
  if (Object.keys(errors).length > 0) {
    res.status(400).json(errors);
  } else {
    next();
  }
};
