const Joi = require('joi')

const validate = (schema) => {
  return async (req, res, next) => {
    const result = Joi.validate(req.body, schema, { abortEarly: false })
    if (result.error) {
      const errors = {}
      result.error.details.forEach(detail => {
        errors[detail.context.key] = detail.message
      })
      res.status(400).json(errors)
    } else {
      next()
    }
  }
}

module.exports = { validate }