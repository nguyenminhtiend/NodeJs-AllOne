const Joi = require('joi');

const listEmployee = {
  query: {
    search: Joi.string().optional(),
    page: Joi.string()
      .regex(/^[1-9][0-9]*$/)
      .optional()
      .error(() => 'Page is invalid.'),
    perPage: Joi.string().regex(/^[1-9][0-9]*$/).optional().error(() => 'PerPage is invalid.')
  }
};

const createEmployee = {
  body: {
    name: Joi.string().required().error(() => 'Name is required.'),
    departmentId: Joi.number().integer().required().error(() => 'Department Id is required.')
  }
};

const updateEmployee = {
  body: {
    name: Joi.string().required().error(() => 'Name is required.'),
    departmentId: Joi.number().integer().required().error(() => 'Department Id is required.')
  },
  params: {
    id: Joi.number().integer().required().error(() => 'Id is required.')
  }
};

const detailEmployee = {
  params: {
    id: Joi.number().integer().required().error(() => 'Id is required.')
  }
};

module.exports = {
  listEmployee,
  createEmployee,
  updateEmployee,
  detailEmployee
};
