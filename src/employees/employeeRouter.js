const express = require('express');
const EmployeeController = require('./EmployeeController');
const { asyncRoute } = require('../utils');
const { validate } = require('../middlewares/validation');
const { employeeCreation } = require('./EmployeeSchema');

module.exports = (app) => {
  const router = express.Router();

  router.get('/', asyncRoute(EmployeeController.index));
  router.get('/:id', asyncRoute(EmployeeController.getDetail));
  router.post('/', validate(employeeCreation), asyncRoute(EmployeeController.create));
  router.put('/', asyncRoute(EmployeeController.update));

  app.use('/employees', router);
};
