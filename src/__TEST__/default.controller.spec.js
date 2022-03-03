const request = require('supertest');
const app = require('../../app');

describe('Test defaultController routes', () => {
  test('It should response the GET method 200 ok', () => {
    return request(app)
      .get('/api/v1')
      .expect(200)
      .expect('Content-Type', /json/);
  });

});