const path = require('path');
const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiLike = require('chai-like');
const startApp = require('../src/app');

if (process.env.NODE_ENV !== 'test') {
  throw new Error(`Trying to start tests with NODE_ENV !== test. (${process.env.NODE_ENV})`);
}

require('dotenv').config({ path: path.resolve(process.cwd(), '.env.test') }); //eslint-disable-line

global.chai = chai;
global.expect = chai.expect;

chai.use(chaiHttp);
chai.use(chaiLike);

const app = startApp();
global.app = app;
