import DashboardRoute from './dashboardRoute';
import UsersRoute from './usersRoute';

const routes = app => {
  app.use(DashboardRoute);
  app.use(UsersRoute);
};

export default routes;
