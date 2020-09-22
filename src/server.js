if (process.env.NODE_ENV === 'development') {
  require('dotenv').config(); //eslint-disable-line
}
const app = require('./app');

const port = process.env.PORT || 5000;

const server = app().listen(port, () => {
  console.log(`Server (env: ${process.env.NODE_ENV}) started on ${port}`);
});

module.exports = server;
