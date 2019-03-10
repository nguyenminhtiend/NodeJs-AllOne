const config = require('./config')

module.exports = function (app) {
  app.locals.config = config // eslint-disable-line no-param-reassign
}
