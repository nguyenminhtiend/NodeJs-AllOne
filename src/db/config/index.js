const NODE_ENV = process.env.NODE_ENV || 'development';

if (NODE_ENV === 'development') {
  require('dotenv').config(); //eslint-disable-line
}

const config = {};
config[NODE_ENV] = {
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  dialect: 'mysql'
};

module.exports = config;
