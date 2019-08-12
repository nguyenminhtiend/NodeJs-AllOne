const Joi = require('joi');

const employeeCreation = {
  firstName: Joi.string()
    .required()
    .error(() => 'First Name is required.'),
  lastName: Joi.string()
    .required()
    .error(() => 'Last Name is required.'),
  phoneNumber: Joi.string()
    .required()
    .error(() => 'Phone Number is required.')
};

module.exports = {
  employeeCreation
};
