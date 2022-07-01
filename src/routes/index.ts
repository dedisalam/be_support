import AdminRoute from './admin';
import PublicsRoute, { PublicDoc } from './public';

export const doc = {
  info: { title: 'REST API', version: '1.0.0', description: 'Example docs' },
  swagger: '2.0',
  paths: {
    ...PublicDoc(),
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
  app.use(AdminRoute);
  app.use(PublicsRoute);
};

export default routes;
