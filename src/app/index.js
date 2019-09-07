const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const initRoutes = require('./initRoutes');
const logRequest = require('./logRequest');
const errorHandler = require('./errorHandler');
const logResponse = require('./logResponse');

module.exports = async (port = process.env.PORT || 5000) => {
  const app = express();

  app.disable('x-powered-by');
  app.use(helmet());
  app.use(cors());
  app.use(bodyParser.json());
  logRequest(app);
  initRoutes(app);
  app.use(errorHandler);
  logResponse(app);

  app.listen(port, () => {
    console.log(`Server (env: ${process.env.NODE_ENV}) started on ${port}`);
  });

  return app;
};
