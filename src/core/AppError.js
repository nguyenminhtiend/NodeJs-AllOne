class AppError extends Error {
  constructor(message, statusCode, err, details) {
    super(message)
    this.name = 'AppError'
    this.message = message || 'An error occured'
    this.code = statusCode || 500
    this.oriError = err
    this.details = details
  }
}

module.exports = AppError
