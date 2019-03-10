const EmployeeService = require('../src/employees/EmployeeService')

describe('Employees', () => {
  beforeEach(() => {

  })

  describe('GET /employees', () => {
    it('should return all employees', async () => {
      const res = await chai.request(URL).get('/employees')
      expect(res).to.have.status(203)
    })
  })

  describe('POST /employees', () => {
    it('should create employees successfully', async () => {
      const employee = {
        firstName: 'Tien',
        lastName: 'Nguyen',
        phoneNumber: '+84966638355'
      }
      const res = await chai.request(URL)
        .post('/employees')
        .send(employee)
      expect(res).to.have.status(201)
      expect(res.body).to.like(employee)
      expect(res.body).to.have.property('id').and.not.equal(undefined)
    })

    it('should get bad request with missing phone number', async () => {
      const employee = {
        firstName: 'Tien',
        lastName: 'Nguyen'
      }
      const res = await chai.request(URL)
        .post('/employees')
        .send(employee)
      expect(res).to.have.status(400)
      expect(res.body).to.like({
        phoneNumber: 'Phone Number is required.'
      })
    })
  })

  describe('PUT /employees', () => {
    let EmployeeServiceStub
    beforeEach(() => {
      EmployeeServiceStub = sinon.stub(EmployeeService, 'update').resolves({
        success: true
      })
    })
    it('should test with stub object', async () => {
      const employee = {
        firstName: 'Tien',
        lastName: 'Nguyen'
      }
      const res = await chai.request(URL)
        .put('/employees')
        .send(employee)

      console.log(res.body)

      expect(res).to.have.status(200)
      expect(EmployeeServiceStub.calledOnce).to.be.true
    })
  })

})
