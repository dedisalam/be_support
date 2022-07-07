import { authMiddleware } from '@middlewares';
import { Read } from '@controllers';
import Admin from './admin';
import Customer, { Doc as CD } from './customer';
// import Public, { Doc as PD } from './public';

const routes = app => {
  app.use(Admin);
  // app.use(Public);
  app.use(Customer);
  app.get('/', authMiddleware, Read);
};

export const doc = {
  info: { title: 'REST API', version: '1.0.0', description: 'Example docs' },
  swagger: '2.0',
  paths: {
    // ...PD(),
    ...CD().paths,
    schemes: { '0': 'http', '1': 'https' },
  },
  definitions: {
    ...CD().definitions,
  },
  responses: {},
  parameters: {},
  securityDefinitions: {},
  tags: [{ name: 'Region', description: 'Region API' }, { name: 'Mikrotik', description: 'Mikrotik API' }, ...CD().tags],
};

export default routes;
