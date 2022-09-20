import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import request from 'supertest';
import App from '@app';
import { Dto } from '@dtos/admin/user';
import Route from '@routes/admin/auth';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Auth', () => {
  describe('[POST] /admin/signup', () => {
    it('response should have the Create data', async () => {
      const data: Dto = {
        email: 'test@email.com',
        password: 'q1w2e3r4!',
      };

      const route = new Route();
      const user = route.controller.service.user;

      user.findOne = jest.fn().mockReturnValue(null);
      user.create = jest.fn().mockReturnValue({
        _id: '60706478aad6c9ad19a31c84',
        email: data.email,
        password: await bcrypt.hash(data.password, 10),
      });

      (mongoose as any).connect = jest.fn();
      const app = new App([route]);
      return request(app.getServer()).post(`${route.path}signup`).send(data);
    });
  });

  describe('[POST] /login', () => {
    it('response should have the Set-Cookie header with the Authorization token', async () => {
      const data: Dto = {
        email: 'test@email.com',
        password: 'q1w2e3r4!',
      };

      const route = new Route();
      const user = route.controller.service.user;

      user.findOne = jest.fn().mockReturnValue({
        _id: '60706478aad6c9ad19a31c84',
        email: data.email,
        password: await bcrypt.hash(data.password, 10),
      });

      (mongoose as any).connect = jest.fn();
      const app = new App([route]);
      return request(app.getServer())
        .post(`${route.path}login`)
        .send(data)
        .expect('Set-Cookie', /^Authorization=.+/);
    });
  });

  // describe('[POST] /logout', () => {
  //   it('logout Set-Cookie Authorization=; Max-age=0', async () => {
  //     const data: User = {
  //       _id: '60706478aad6c9ad19a31c84',
  //       email: 'test@email.com',
  //       password: await bcrypt.hash('q1w2e3r4!', 10),
  //     };

  //     const route = new Route();
  //     const user = route.controller.service.user;

  //     user.findOne = jest.fn().mockReturnValue(data);

  //     (mongoose as any).connect = jest.fn();
  //     const app = new App([route]);
  //     return request(app.getServer())
  //       .post(`${route.path}logout`)
  //       .send(data)
  //       .set('Set-Cookie', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ')
  //       .expect('Set-Cookie', /^Authorization=\; Max-age=0/);
  //   });
  // });
});
