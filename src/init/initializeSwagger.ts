import { doc } from '@routes';
// import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const initializeSwagger = app => {
  // const options = {
  //   swaggerDefinition: {
  //     info: {
  //       title: 'REST API',
  //       version: '1.0.0',
  //       description: 'Example docs',
  //     },
  //   },
  //   apis: ['swagger.yaml'],
  // };

  // const specs = swaggerJSDoc(options);
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(doc));
};

export default initializeSwagger;
