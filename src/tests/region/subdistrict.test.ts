import { Sequelize } from 'sequelize';
import request from 'supertest';
import App from '@app';
import Route from '@routes/region/subdistrict';

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
          CityId: 1,
        },
        {
          id: 2,
          name: 'Antapani',
          CityId: 1,
        },
        {
          id: 3,
          name: 'Sumur Bandung',
          CityId: 1,
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
});
