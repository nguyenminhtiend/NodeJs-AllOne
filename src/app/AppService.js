const AppError = require('../core/AppError')

module.exports = class AppService {
  static makeSequelizeValidationErrorHandler(res) {
    return (err) => {
      const errors = {}
      err.errors.forEach((e) => {
        let { path } = e
        const indexOfUnderscore = path.indexOf('_')
        if (indexOfUnderscore >= 0) {
          path = path.substr(0, indexOfUnderscore)
        }

        errors[path] = e.message
      })

      return res.status(400).json({
        error: 'One or more inputs are invalid',
        details: errors
      })
    }
  }

  static makeGeneralErrorHandler(res) {
    return (err) => {
      if (err instanceof AppError) {
        res
          .status(err.code)
          .json({
            error: err.message,
            details: err.details,
            oriErrorMessage: err.oriError && err.oriError.message
          })
        return
      }
      res.status(500).json({ error: err.message })
    }
  }
}
