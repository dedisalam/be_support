import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import request from 'supertest';
import App from '@app';
import { Dto } from '@dtos/admin/user';
import Route from '@routes/admin/user';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing user', () => {
  describe('[GET] /admin/users', () => {
    it('response findAll user', async () => {
      const route = new Route();
      const user = route.controller.service.user;

      user.find = jest.fn().mockReturnValue([
        {
          _id: 'qpwoeiruty',
          email: 'a@email.com',
          password: await bcrypt.hash('q1w2e3r4!', 10),
        },
        {
          _id: 'alskdjfhg',
          email: 'b@email.com',
          password: await bcrypt.hash('a1s2d3f4!', 10),
        },
        {
          _id: 'zmxncbv',
          email: 'c@email.com',
          password: await bcrypt.hash('z1x2c3v4!', 10),
        },
      ]);

      (mongoose as any).connect = jest.fn();
      const app = new App([route]);
      return request(app.getServer()).get(`${route.path}s`).expect(200);
    });
  });

  describe('[GET] /admin/user/:id', () => {
    it('response findOne User', async () => {
      const id = 'qpwoeiruty';

      const route = new Route();
      const user = route.controller.service.user;

      user.findOne = jest.fn().mockReturnValue({
        _id: 'qpwoeiruty',
        email: 'a@email.com',
        password: await bcrypt.hash('q1w2e3r4!', 10),
      });

      (mongoose as any).connect = jest.fn();
      const app = new App([route]);
      return request(app.getServer()).get(`${route.path}/${id}`).expect(200);
    });
  });

  describe('[POST] /admin/user', () => {
    it('response Create User', async () => {
      const data: Dto = {
        email: 'test@email.com',
        password: 'q1w2e3r4',
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
      return request(app.getServer()).post(`${route.path}`).send(data).expect(201);
    });
  });

  describe('[PUT] /admin/user/:id', () => {
    it('response Update User', async () => {
      const id = '60706478aad6c9ad19a31c84';
      const data: Dto = {
        email: 'test@email.com',
        password: 'q1w2e3r4',
      };

      const route = new Route();
      const user = route.controller.service.user;

      if (data.email) {
        user.findOne = jest.fn().mockReturnValue({
          _id: id,
          email: data.email,
          password: await bcrypt.hash(data.password, 10),
        });
      }

      user.findByIdAndUpdate = jest.fn().mockReturnValue({
        _id: id,
        email: data.email,
        password: await bcrypt.hash(data.password, 10),
      });

      (mongoose as any).connect = jest.fn();
      const app = new App([route]);
      return request(app.getServer()).put(`${route.path}/${id}`).send(data);
    });
  });

  describe('[DELETE] /admin/user/:id', () => {
    it('response Delete User', async () => {
      const id = '60706478aad6c9ad19a31c84';

      const route = new Route();
      const user = route.controller.service.user;

      user.findByIdAndDelete = jest.fn().mockReturnValue({
        _id: '60706478aad6c9ad19a31c84',
        email: 'test@email.com',
        password: await bcrypt.hash('q1w2e3r4!', 10),
      });

      (mongoose as any).connect = jest.fn();
      const app = new App([route]);
      return request(app.getServer()).delete(`${route.path}/${id}`).expect(200);
    });
  });
});
