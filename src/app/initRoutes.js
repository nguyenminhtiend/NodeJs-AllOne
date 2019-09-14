const path = require('path');
const glob = require('glob');
const express = require('express');


module.exports = (app) => {
  const files = glob.sync('src/components/**/router.js');
  const router = express.Router();

  files.forEach((filePath) => {
    const fullPath = path.join(process.cwd(), filePath);
    const relativePath = path.relative(__dirname, fullPath);

    require(relativePath)(router);//eslint-disable-line
  });

  app.use('/api', router);
};
