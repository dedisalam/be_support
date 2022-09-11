import { Sequelize } from 'sequelize';
import request from 'supertest';
import App from '@app';
import Route from '@routes/region/province';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Province', () => {
  describe('[GET] /region/provinces', () => {
    it('response findAll province', async () => {
      const route = new Route();
      const table = route.controller.service.table;

      table.findAll = jest.fn().mockReturnValue([
        {
          id: 1,
          name: 'Jawa Barat',
          CountryId: 1,
        },
        {
          id: 2,
          name: 'Jawa Tengah',
          CountryId: 1,
        },
        {
          id: 3,
          name: 'Jawa Timur',
          CountryId: 1,
        },
      ]);

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([route]);
      return request(app.getServer()).get(`${route.path}s`).expect(200);
    });
  });

  describe('[GET] /region/province/:id', () => {
    it('response findOne province', async () => {
      const id = 1;

      const route = new Route();
      const table = route.controller.service.table;

      table.findByPk = jest.fn().mockReturnValue({
        id: 1,
        name: 'Jawa Barat',
      });

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([route]);
      return request(app.getServer()).get(`${route.path}/${id}`).expect(200);
    });
  });
});
