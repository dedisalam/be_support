import request from 'supertest';
import App from '@app';
import Route from '@routes';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Index', () => {
  describe('[GET] /', () => {
    it('response statusCode 200', () => {
      const route = new Route();
      const app = new App([route]);

      return request(app.getServer()).get(`${route.path}`).expect(200);
    });
  });
});
