import { Sequelize } from 'sequelize';
import request from 'supertest';
import App from '@app';
import Dto from '@dtos/region/city.dto';
import Route from '@routes/region/city.route';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing City', () => {
  describe('[GET] /region/cities', () => {
    it('response findAll city', async () => {
      const route = new Route();
      const table = route.controller.service.table;

      table.findAll = jest.fn().mockReturnValue([
        {
          id: 1,
          name: 'Bandung',
        },
        {
          id: 2,
          name: 'Jakarta',
        },
        {
          id: 3,
          name: 'Semarang',
        },
      ]);

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([route]);
      return request(app.getServer()).get('/region/cities').expect(200);
    });
  });

  describe('[GET] /region/city/:id', () => {
    it('response findOne city', async () => {
      const id = 1;

      const route = new Route();
      const table = route.controller.service.table;

      table.findByPk = jest.fn().mockReturnValue({
        id: 1,
        name: 'Bandung',
      });

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([route]);
      return request(app.getServer()).get(`${route.path}/${id}`).expect(200);
    });
  });

  describe('[POST] /region/city', () => {
    it('response Create city', async () => {
      const data: Dto = {
        name: 'Bandung',
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

  describe('[PUT] /region/city/:id', () => {
    it('response Update city', async () => {
      const id = 1;
      const data: Dto = {
        name: 'Bandung',
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

  describe('[DELETE] /region/city/:id', () => {
    it('response Delete city', async () => {
      const id = 1;

      const route = new Route();
      const table = route.controller.service.table;

      table.findByPk = jest.fn().mockReturnValue({
        id: id,
        name: 'Bandung',
      });

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([route]);
      return request(app.getServer()).delete(`${route.path}/${id}`).expect(200);
    });
  });
});
