const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../core/config')

const dbConfig = config.db
const sequelize = new Sequelize(dbConfig)

// Load models into models object
const paths = fs.readdirSync(__dirname)
const models = {}
paths.filter(file => file !== 'index.js')
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file))
    models[model.name] = model
  })

// Create model relationships
Object.keys(models).forEach(name => {
  if (models[name].associate) {
    models[name].associate(models)
  }
})

module.exports = {
  sequelize,
  Sequelize,
  models
}
