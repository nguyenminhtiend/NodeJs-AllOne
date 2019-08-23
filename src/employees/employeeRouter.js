const express = require('express');
const EmployeeController = require('./EmployeeController');
const { asyncRoute } = require('../utils');
const { validator } = require('../middlewares');
const { detailEmployee, createEmployee, updateEmployee } = require('./EmployeeSchema');

module.exports = (app) => {
  const router = express.Router();

  router.get('/', asyncRoute(EmployeeController.index));
  router.get('/:id', validator(detailEmployee), asyncRoute(EmployeeController.show));
  router.post('/', validator(createEmployee), asyncRoute(EmployeeController.create));
  router.put('/:id', validator(updateEmployee), asyncRoute(EmployeeController.update));

  app.use('/employees', router);
};
