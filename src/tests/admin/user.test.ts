import bcrypt from 'bcrypt';
import { Sequelize } from 'sequelize';
import request from 'supertest';
import App from '@app';
import Dto from '@dtos/admin/user.dto';
import Route from '@routes/admin/user.route';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing User', () => {
  describe('[GET] /admin/users', () => {
    it('response findAll user', async () => {
      const route = new Route();
      const table = route.controller.service.table;

      table.findAll = jest.fn().mockReturnValue([
        {
          id: 1,
          email: 'a@email.com',
          password: await bcrypt.hash('q1w2e3r4!', 10),
        },
        {
          id: 2,
          email: 'b@email.com',
          password: await bcrypt.hash('a1s2d3f4!', 10),
        },
        {
          id: 3,
          email: 'c@email.com',
          password: await bcrypt.hash('z1x2c3v4!', 10),
        },
      ]);

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([route]);
      return request(app.getServer()).get(`${route.path}s`).expect(200);
    });
  });

  describe('[GET] /admin/user/:id', () => {
    it('response findOne user', async () => {
      const id = 1;

      const route = new Route();
      const table = route.controller.service.table;

      table.findByPk = jest.fn().mockReturnValue({
        id: 1,
        email: 'a@email.com',
        password: await bcrypt.hash('q1w2e3r4!', 10),
      });

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([route]);
      return request(app.getServer()).get(`${route.path}/${id}`).expect(200);
    });
  });

  describe('[POST] /admin/user', () => {
    it('response Create user', async () => {
      const data: Dto = {
        email: 'test@email.com',
        password: 'q1w2e3r4!',
      };

      const route = new Route();
      const table = route.controller.service.table;

      table.findOne = jest.fn().mockReturnValue(null);
      table.create = jest.fn().mockReturnValue({
        id: 1,
        email: data.email,
        password: await bcrypt.hash(data.password, 10),
      });

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([route]);
      return request(app.getServer()).post(`${route.path}`).send(data).expect(201);
    });
  });

  describe('[PUT] /admin/user/:id', () => {
    it('response Update user', async () => {
      const id = 1;
      const data: Dto = {
        email: 'test@email.com',
        password: '1q2w3e4r!',
      };

      const route = new Route();
      const table = route.controller.service.table;

      table.findByPk = jest.fn().mockReturnValue({
        id: id,
        email: data.email,
        password: await bcrypt.hash(data.password, 10),
      });
      table.update = jest.fn().mockReturnValue([1]);
      table.findByPk = jest.fn().mockReturnValue({
        id: id,
        email: data.email,
        password: await bcrypt.hash(data.password, 10),
      });

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([route]);
      return request(app.getServer()).put(`${route.path}/${id}`).send(data).expect(200);
    });
  });

  describe('[DELETE] /admin/user/:id', () => {
    it('response Delete user', async () => {
      const id = 1;

      const route = new Route();
      const table = route.controller.service.table;

      table.findByPk = jest.fn().mockReturnValue({
        id: id,
        email: 'a@email.com',
        password: await bcrypt.hash('q1w2e3r4!', 10),
      });

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([route]);
      return request(app.getServer()).delete(`${route.path}/${id}`).expect(200);
    });
  });
});
