const Joi = require('joi');

const createEmployee = {
  body: {
    name: Joi.string()
      .required()
      .error(() => 'Name is required.'),
    departmentId: Joi.number()
      .integer()
      .required()
      .error(() => 'Department Id is required.')
  }
};

const updateEmployee = {
  body: {
    name: Joi.string()
      .required()
      .error(() => 'Name is required.'),
    departmentId: Joi.number()
      .integer()
      .required()
      .error(() => 'Department Id is required.')
  },
  params: {
    id: Joi.number()
      .integer()
      .required()
      .error(() => 'Id is required.')
  }
};

const detailEmployee = {
  params: {
    id: Joi.number()
      .integer()
      .required()
      .error(() => 'Id is required.')
  }
};

module.exports = {
  createEmployee,
  updateEmployee,
  detailEmployee
};
