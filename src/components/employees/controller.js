const { getBy, getById, create, update } = require('./service');

module.exports = class EmployeeController {
  static async index(req, res) {
    const employees = await getBy();
    res.json(employees);
  }

  static async show(req, res) {
    const employee = await getById(req.params.id);
    res.json({ employee });
  }

  static async create(req, res) {
    const result = await create(req.body);
    res.status(201).json(result);
  }

  static async update(req, res) {
    await update(req.params.id, req.body);
    res.status(204).send();
  }
};