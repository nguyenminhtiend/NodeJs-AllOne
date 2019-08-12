const { Employee, Department } = require('../db/models');

module.exports = class EmployeeService {
  static async getEmployees() {
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

  static async create(data) {
    return {
      ...data,
      id: new Date().getTime()
    };
  }

  static async update(data) {
    console.log(data);
    return new Promise((resolve) => {
      setTimeout(() => resolve({ success: true }), 1);
    });
  }
};
