const {
  NODE_ENV, DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_PORT, DB_LOGGING
} = process.env;

if (['development', 'test'].includes(NODE_ENV)) {
  require('dotenv').config(); //eslint-disable-line
}

const db = {
  host: DB_HOST,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
  dialect: 'mysql'
};

if (!DB_LOGGING) {
  db.logging = false;
}

module.exports = {
  [NODE_ENV]: db
};
