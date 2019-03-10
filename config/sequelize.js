const _ = require('lodash')
const ENV = process.env.NODE_ENV || 'development'
const defaultConfig = require('./default').db

const config = {}

let localConfig = {}
try {
  // eslint-disable-next-line global-require
  localConfig = require('./local').db
} catch (e) {
  // NOOP
}

let envConfig = {}
try {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  envConfig = require(`./${ENV}`).db
} catch (e) {
  // NOOP
}

// NOTE: LOCAL CONFIG ONLY USED WHEN NOT IN test OR production environments
config[ENV] = _.merge(
  {},
  defaultConfig,
  envConfig,
  /^test|production$/.test(ENV) ? {} : localConfig
)

console.log(config)
module.exports = config
