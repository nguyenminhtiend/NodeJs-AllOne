module.exports = class EmployeeService {
  static async getEmployees() {
    const employees = [{
      firstName: 'Tien',
      lastName: 'Nguyen'
    }]
    return await new Promise((resolve) => {
      setTimeout(() => resolve(employees), 1)
    })
  }

  static async create(data) {
    return {
      ...data,
      id: new Date().getTime()
    }
  }

  static async update(data) {
    console.log(data)
    return await new Promise((resolve) => {
      setTimeout(() => resolve({ success: true }), 1)
    })
  }
}
