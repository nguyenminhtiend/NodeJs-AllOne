const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const { db } = require('config');

const sequelize = new Sequelize(db);
const paths = fs.readdirSync(__dirname);
const models = {};

paths
  .filter((file) => file !== 'index.js')
  .forEach((file) => {
    // eslint-disable-next-line import/no-dynamic-require
    const model = require(path.join(__dirname, file)); // eslint-disable-line global-require
    models[model.name] = model.init(model._attributes, { sequelize, ...model._options });
  });

Object.values(models)
  .filter((model) => typeof model.associate === 'function')
  .forEach((model) => model.associate(models));

module.exports = {
  sequelize,
  Sequelize,
  ...models
};
