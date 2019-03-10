const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const initConfig = require('./initConfig')
const initRoutes = require('./initRoutes')
const initLog = require('./initLog')
const initLogResponseEnd = require('./initLogResponseEnd')
const errorHandler = require('./errorHandler')

const DEFAULT_PORT = process.env.PORT || 5000
const DEFAULT_ENV = process.env.NODE_ENV || 'development'

module.exports = async (app, port = DEFAULT_PORT, env = DEFAULT_ENV) => {
  app.disable('x-powered-by')
  app.use(helmet())
  app.use(cors())
  app.use(bodyParser.json())


  initConfig(app, env)
  initLog(app)
  initRoutes(app)
  app.use(errorHandler)
  initLogResponseEnd(app)



  app.listen(port, () => {
    console.log(`Server (env: ${process.env.NODE_ENV}) started on ${port}`)
  })
  return app
}