import { Sequelize } from 'sequelize';
import request from 'supertest';
import App from '@app';
import Dto from '@dtos/region/subdistrict.dto';
import Route from '@routes/region/subdistrict.route';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Subdistrict', () => {
  describe('[GET] /region/subdistricts', () => {
    it('response findAll subdistrict', async () => {
      const route = new Route();
      const table = route.controller.service.table;

      table.findAll = jest.fn().mockReturnValue([
        {
          id: 1,
          name: 'Batununggal',
        },
        {
          id: 2,
          name: 'Antapani',
        },
        {
          id: 3,
          name: 'Sumur Bandung',
        },
      ]);

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([route]);
      return request(app.getServer()).get(`${route.path}s`).expect(200);
    });
  });

  describe('[GET] /region/subdistrict/:id', () => {
    it('response findOne subdistrict', async () => {
      const id = 1;

      const route = new Route();
      const table = route.controller.service.table;

      table.findByPk = jest.fn().mockReturnValue({
        id: 1,
        name: 'Batununggal',
      });

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([route]);
      return request(app.getServer()).get(`${route.path}/${id}`).expect(200);
    });
  });

  describe('[POST] /region/subdistrict', () => {
    it('response Create subdistrict', async () => {
      const data: Dto = {
        name: 'Batununggal',
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

  describe('[PUT] /region/subdistrict/:id', () => {
    it('response Update subdistrict', async () => {
      const id = 1;
      const data: Dto = {
        name: 'Batununggal',
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

  describe('[DELETE] /region/subdistrict/:id', () => {
    it('response Delete subdistrict', async () => {
      const id = 1;

      const route = new Route();
      const table = route.controller.service.table;

      table.findByPk = jest.fn().mockReturnValue({
        id: id,
        name: 'Batununggal',
      });

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([route]);
      return request(app.getServer()).delete(`${route.path}/${id}`).expect(200);
    });
  });
});
