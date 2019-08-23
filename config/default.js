module.exports = {
  db: {
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    logging: false,
    charset: 'utf8',
    dialect: 'mysql'
  },
  logging: {
    request: true,
    response: true,
    error: true
  }
};
