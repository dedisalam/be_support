import request from 'supertest';
import { coba } from '../../server';

afterAll(async () => {
  // eslint-disable-next-line no-promise-executor-return
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Category', () => {
  describe('[GET] /category', () => {
    it('response findAll category', async () => {
      const res = await request(coba).get('/category');
      expect(res.status).toBe(200);
      expect(res.body).toHaveLength(2);
    });
  });
});
