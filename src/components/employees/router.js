const express = require('express');
const { asyncRoute } = require('../../utils');
const { validator } = require('../../middlewares');
const {
  index, show, create, update
} = require('./controller');
const {
  detailEmployee, createEmployee, updateEmployee, listEmployee
} = require('./schema');

module.exports = (app) => {
  const router = express.Router();

  router.get('/', validator(listEmployee), asyncRoute(index));
  router.get('/:id', validator(detailEmployee), asyncRoute(show));
  router.post('/', validator(createEmployee), asyncRoute(create));
  router.put('/:id', validator(updateEmployee), asyncRoute(update));

  app.use('/employees', router);
};
