const express = require('express');
const { startApp } = require('./core');

const app = express();
startApp(app);

module.exports = app;
