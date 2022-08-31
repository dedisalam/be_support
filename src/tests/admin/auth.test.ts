import bcrypt from 'bcrypt';
import { Sequelize } from 'sequelize';
import request from 'supertest';
import App from '@app';
import Dto from '@dtos/admin/user.dto';
import Route from '@routes/admin/auth.route';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Auth', () => {
  describe('[POST] /admin/user/signup', () => {
    it('response should have the Create Data', async () => {
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
      return request(app.getServer()).post(`${route.path}/signup`).send(data).expect(201);
    });
  });

  describe('[POST] /admin/user/login', () => {
    it('response should have the Set-Cookie header with the Authorization token', async () => {
      const userData: Dto = {
        email: 'test@email.com',
        password: 'q1w2e3r4!',
      };

      const authRoute = new Route();
      const user = authRoute.controller.service.table;

      user.findOne = jest.fn().mockReturnValue({
        id: 1,
        email: userData.email,
        password: await bcrypt.hash(userData.password, 10),
      });

      (Sequelize as any).authenticate = jest.fn();
      const app = new App([authRoute]);
      return request(app.getServer())
        .post(`${authRoute.path}/login`)
        .send(userData)
        .expect('Set-Cookie', /^Authorization=.+/);
    });
  });

  // describe('[POST] /admin/user/logout', () => {
  //   it('logout Set-Cookie Authorization=; Max-age=0', async () => {
  //     const authRoute = new AuthRoute();

  //     const app = new App([authRoute]);
  //     return request(app.getServer())
  //       .post(`${authRoute.path}/logout`)
  //       .expect('Set-Cookie', /^Authorization=\;/);
  //   });
  // });
});
