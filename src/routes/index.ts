import { authMiddleware } from '@middlewares';
import Admin from './admin';
import Customer, { Doc as CD } from './customer';
import Public, { Doc as PD } from './public';

export const doc = {
  info: { title: 'REST API', version: '1.0.0', description: 'Example docs' },
  swagger: '2.0',
  paths: {
    ...PD(),
    ...CD(),
    schemes: { '0': 'https' },
  },
  definitions: {},
  responses: {},
  parameters: {},
  securityDefinitions: {},
  tags: [
    { name: 'Region', description: 'Region API' },
    { name: 'Mikrotik', description: 'Mikrotik API' },
  ],
};

const routes = app => {
  app.use(Admin);
  app.use(Public);
  app.use(Customer);
  app.get('/', authMiddleware, (req, res) => {
    res.sendStatus(200);
  });
};

export default routes;
