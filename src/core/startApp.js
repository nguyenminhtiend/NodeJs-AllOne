const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const initRoutes = require('./initRoutes');
const initLog = require('./initLog');
const initLogResponseEnd = require('./initLogResponseEnd');
const errorHandler = require('./errorHandler');
// const { sequelize } = require('../db/models');

const DEFAULT_PORT = process.env.PORT || 5000;

module.exports = async (app, port = DEFAULT_PORT) => {
  app.disable('x-powered-by');
  app.use(helmet());
  app.use(cors());
  app.use(bodyParser.json());

  initLog(app);
  initRoutes(app);
  app.use(errorHandler);
  initLogResponseEnd(app);

  // await sequelize.authenticate();
  app.listen(port, () => {
    console.log(`Server (env: ${process.env.NODE_ENV}) started on ${port}`);
  });
  return app;
};
