const _ = require('lodash')
const defaultConfig = require('../../config/default')

let envConfig = {}
try {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  envConfig = require(`../../config/${process.env.NODE_ENV}`)
} catch (e) { /* Ignoring error */ }

// NOTE: LOCAL CONFIG ONLY USED WHEN NOT IN test OR production environments
let localConfig = {}
if (!/^test|production$/.test(process.env.NODE_ENV)) {
  try {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    localConfig = require('../../config/local')
  } catch (e) { /* Ignoring error */ }
}

const config = _.merge({}, defaultConfig, envConfig, localConfig)

module.exports = config
