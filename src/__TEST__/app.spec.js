import request from 'supertest';
import app from '../../app';

describe('Test the root path', () => {
  test('It should response the GET method', () => {
    return request(app)
      .get('/')
      .expect(302);
  });

  test('test 404 error for not found path', () => {
    return request(app)
      .get('/anyway')
      .expect(404);
  });
});
