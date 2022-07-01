import { errorMiddleware } from '@middlewares';

function initializeErrorHandling(app) {
  app.use(errorMiddleware);
}

export default initializeErrorHandling;
