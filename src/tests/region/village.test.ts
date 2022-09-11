import { Sequelize } from 'sequelize';
import request from 'supertest';
import App from '@app';
import Route from '@routes/region/village';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Village', () => {
  describe('[GET] /region/villages', () => {
    it('response findAll village', async () => {
      const route = new Route();
      const table = route.controller.service.table;

      table.findAll = jest.fn().mockReturnValue([
        {
          id: 1,
          name: 'Kebonwaru',
          SubdistrictId: 1,
        },
        {
          id: 2,
          name: 'Kacapiring',
          SubdistrictId: 1,
        },
        {
          id: 3,
          name: 'Samoja',
          SubdistrictId: 1,
        },
      ]);

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([route]);
      return request(app.getServer()).get(`${route.path}s`).expect(200);
    });
  });

  describe('[GET] /region/village/:id', () => {
    it('response findOne village', async () => {
      const id = 1;

      const route = new Route();
      const table = route.controller.service.table;

      table.findByPk = jest.fn().mockReturnValue({
        id: 1,
        name: 'Kebonwaru',
      });

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([route]);
      return request(app.getServer()).get(`${route.path}/${id}`).expect(200);
    });
  });
});
