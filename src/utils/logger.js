const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  format: format.json(),
  transports: [
    new transports.Console({ level: 'info' }),
  ]
});

module.exports = logger;
