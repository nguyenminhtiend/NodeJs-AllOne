const { seedEmployee, seedDepartment } = require('../seed');

describe('## Employee APIs', () => {
  beforeEach(async () => {});

  describe('# GET /api/employees', () => {
    it('should return all employees', async () => {
      await seedEmployee();

      const res = await chai.request(URL).get('/employees');

      expect(res).to.have.status(200);
      expect(res.body.length).to.equal(2);
    });
  });

  describe('# POST /employees', () => {
    it('should create a new employee', async () => {
      const departmentId = await seedDepartment();
      const employee = {
        name: 'Tien',
        departmentId
      };
      const res = await chai
        .request(URL)
        .post('/employees')
        .send(employee);
      expect(res).to.have.status(201);
      expect(res.body).to.like(employee);
      expect(res.body)
        .to.have.property('id')
        .and.not.equal(undefined);
    });

    it('should get bad request with invalid input', async () => {
      const employee = {};
      const res = await chai
        .request(URL)
        .post('/employees')
        .send(employee);
      expect(res).to.have.status(400);
      expect(res.body).to.like({
        name: 'Name is required.',
        departmentId: 'Department Id is required.'
      });
    });
  });
});
