const Sequelize = require('sequelize')
const AppService = require('../app/AppService')

module.exports = (err, req, res, next) => {
  if (err instanceof SyntaxError) {
    res.status(400).json({
      error: 'Invalid JSON body'
    })
  } else if (err instanceof Sequelize.ValidationError) {
    AppService.makeSequelizeValidationErrorHandler(res)(err)
  } else {
    AppService.makeGeneralErrorHandler(res)(err)
  }
  next(err)
}
