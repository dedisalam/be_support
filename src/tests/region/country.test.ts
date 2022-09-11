import { Sequelize } from 'sequelize';
import request from 'supertest';
import App from '@app';
import Route from '@routes/region/country';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Country', () => {
  describe('[GET] /region/countries', () => {
    it('response findAll country', async () => {
      const route = new Route();
      const table = route.controller.service.table;

      table.findAll = jest.fn().mockReturnValue([
        {
          id: 1,
          name: 'Indonesia',
        },
        {
          id: 2,
          name: 'Belanda',
        },
        {
          id: 3,
          name: 'Jepang',
        },
      ]);

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([route]);
      return request(app.getServer()).get('/region/countries').expect(200);
    });
  });

  describe('[GET] /region/country/:id', () => {
    it('response findOne country', async () => {
      const id = 1;

      const route = new Route();
      const table = route.controller.service.table;

      table.findByPk = jest.fn().mockReturnValue({
        id: 1,
        name: 'Indonesia',
      });

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([route]);
      return request(app.getServer()).get(`${route.path}/${id}`).expect(200);
    });
  });
});
