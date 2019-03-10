const path = require('path')
const glob = require('glob')
const express = require('express')

module.exports = function(app) {
  const files = glob.sync('src/**/*Router.js', {})
  const router = express.Router()

  files.forEach(filePath => {
    const fullPath = path.join(process.cwd(), filePath)
    const relativePath = path.relative(__dirname, fullPath)
    require(relativePath)(router)
  })

  app.use('/api', router)
}
