const { Employee, Department } = require('../../db/models');
const { AppError } = require('../../app');

module.exports = class EmployeeService {
  static async getBy() {
    const employees = await Employee.findAll({
      attributes: { exclude: ['updated_at'] },
      include: [
        {
          model: Department,
          as: 'department',
          attributes: ['name']
        }
      ]
    });
    return employees;
  }

  static async getById(id) {
    const employee = await Employee.findByPk(id, {
      attributes: { exclude: ['updated_at'] },
      include: [
        {
          model: Department,
          as: 'department',
          attributes: ['id', 'name']
        }
      ]
    });
    return employee;
  }

  static async create(employee) {
    const savedEmployee = await Employee.create(employee);
    return savedEmployee;
  }

  static async update(id, employee) {
    const [affectedRows] = await Employee.update(employee, {
      where: {
        id
      }
    });
    if (affectedRows === 0) throw new AppError('No record is updated.  lakgj aglkaj glkajgl agjlaks');
  }
};
