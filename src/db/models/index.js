const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize(config[process.env.NODE_ENV]);
const paths = fs.readdirSync(__dirname);
const models = {};

paths
  .filter((file) => file !== 'index.js')
  .forEach((file) => {
    const model = require(path.join(__dirname, file)); //eslint-disable-line
    models[model.name] = model.init(model._attributes, {
      sequelize,
      ...model._options
    });
  });

Object.values(models)
  .filter((model) => typeof model.associate === 'function')
  .forEach((model) => model.associate(models));

module.exports = {
  sequelize,
  Sequelize,
  ...models
};
