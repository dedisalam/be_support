import { Sequelize } from 'sequelize';
import request from 'supertest';
import App from '@app';
import Dto from '@dtos/customer/category';
import Route from '@routes/customer/category';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing User', () => {
  describe('[GET] /customer/categories', () => {
    it('response findAll category', async () => {
      const route = new Route();
      const table = route.controller.service.table;

      table.findAll = jest.fn().mockReturnValue([
        {
          id: 1,
          name: 'testing category',
        },
        {
          id: 2,
          name: 'testing category 2',
        },
        {
          id: 3,
          name: 'testing category 3',
        },
      ]);

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([route]);
      return request(app.getServer()).get(`/customer/categories`).expect(200);
    });
  });

  describe('[GET] /customer/category/:id', () => {
    it('response findOne category', async () => {
      const id = 1;

      const route = new Route();
      const table = route.controller.service.table;

      table.findByPk = jest.fn().mockReturnValue({
        id: 1,
        name: 'a@email.com',
      });

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([route]);
      return request(app.getServer()).get(`${route.path}/${id}`).expect(200);
    });
  });

  describe('[POST] /customer/category', () => {
    it('response Create category', async () => {
      const data: Dto = {
        name: 'test category',
      };

      const route = new Route();
      const table = route.controller.service.table;

      table.findOne = jest.fn().mockReturnValue(null);
      table.create = jest.fn().mockReturnValue({
        id: 1,
        name: data.name,
      });

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([route]);
      return request(app.getServer()).post(`${route.path}`).send(data).expect(201);
    });
  });

  describe('[PUT] /customer/category/:id', () => {
    it('response Update category', async () => {
      const id = 1;
      const data: Dto = {
        name: 'test category',
      };

      const route = new Route();
      const table = route.controller.service.table;

      table.findByPk = jest.fn().mockReturnValue({
        id: id,
        name: data.name,
      });
      table.update = jest.fn().mockReturnValue([1]);
      table.findByPk = jest.fn().mockReturnValue({
        id: id,
        name: data.name,
      });

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([route]);
      return request(app.getServer()).put(`${route.path}/${id}`).send(data).expect(200);
    });
  });

  describe('[DELETE] /customer/category/:id', () => {
    it('response Delete category', async () => {
      const id = 1;

      const route = new Route();
      const table = route.controller.service.table;

      table.findByPk = jest.fn().mockReturnValue({
        id: id,
        name: 'test category',
      });

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([route]);
      return request(app.getServer()).delete(`${route.path}/${id}`).expect(200);
    });
  });
});
