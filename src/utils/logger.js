const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  format: format.json(),
  transports: [
    new transports.Console({ level: 'info' }),
    // new transports.File({
    //   filename: 'logs/combined.log',
    //   level: 'error'
    // })
  ]
});

module.exports = logger;
