const chai = require('chai')
const chaiHttp = require('chai-http')
const chaiLike = require('chai-like')
const express = require('express')
const app = express()
const startApp = require('../src/core/startApp')
const sinon = require('sinon')

global.chai = chai
global.assert = chai.assert
global.expect = chai.expect
global.URL = 'localhost:3001/api'
global.sinon = sinon

chai.use(chaiHttp)
chai.use(chaiLike)

before((done) => {
  if (process.env.NODE_ENV !== 'test') {
    throw new Error(`Trying to start tests with NODE_ENV !== test. (${process.env.NODE_ENV})`)
  }
  startApp(app, 3001, 'test')
  done()
})
