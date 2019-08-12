const EmployeeService = require('./EmployeeService');

module.exports = class EmployeeController {
  static async index(req, res) {
    const employees = await EmployeeService.getEmployees();
    res.json(employees);
  }

  static async create(req, res) {
    const result = await EmployeeService.create(req.body);
    res.status(201).json(result);
  }

  static async getDetail(req, res) {
    res.json({ abc: true });
  }

  static async update(req, res) {
    const result = await EmployeeService.update(req.body);
    res.json(result);
  }
};
