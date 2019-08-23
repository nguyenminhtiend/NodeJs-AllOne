const EmployeeService = require('./EmployeeService');

module.exports = class EmployeeController {
  static async index(req, res) {
    const employees = await EmployeeService.getBy();
    res.json(employees);
  }

  static async show(req, res) {
    const employee = await EmployeeService.getById(req.params.id);
    res.json(employee);
  }

  static async create(req, res) {
    const result = await EmployeeService.create(req.body);
    res.status(201).json(result);
  }

  static async update(req, res) {
    await EmployeeService.update(req.params.id, req.body);
    res.status(204).send();
  }
};
