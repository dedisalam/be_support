import { Sequelize } from 'sequelize';
import request from 'supertest';
import App from '@app';
import Route from '@routes/region/city';

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
          ProvinceId: 1,
        },
        {
          id: 2,
          name: 'Garut',
          ProvinceId: 1,
        },
        {
          id: 3,
          name: 'Tasikmalaya',
          ProvinceId: 1,
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
});
