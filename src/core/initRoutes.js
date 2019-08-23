/* eslint-disable import/no-dynamic-require */
const path = require('path');
const glob = require('glob');
const express = require('express');

module.exports = (app) => {
  const files = glob.sync('src/**/*Router.js', {});
  const router = express.Router();

  files.forEach((filePath) => {
    const fullPath = path.join(process.cwd(), filePath);
    const relativePath = path.relative(__dirname, fullPath);
    // eslint-disable-next-line global-require
    require(relativePath)(router);
  });

  app.use('/api', router);
};
